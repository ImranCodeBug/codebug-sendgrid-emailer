import * as React from 'react'
import { sendGridTestData, templateModel } from '../Models/TemplateModel'
import { searchByTemplateId } from '../Services/SendGridService'
import { isTemplateModel } from '../Services/UtilService'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'
import * as _ from 'lodash'
import { sendEmail } from '../Services/EmailService'
import { NotificationComponent, notificationType } from './NotificationComponent'
import { responseType } from '../Models/FunctionResponse'

interface Props {
    emailAddressText: string
    apiKeyText: string,
    senderEmailAddress: string,
    dynamicsUrl: string
}

export const MainComponent = (props: Props) => {
    const [templateSearchingInProgress, setTemplateSearchingInProgress] = React.useState(false);
    const [templateSearchError, setTemplateSearchError] = React.useState<boolean>(false);
    const [templateModel, setTemplateModel] = React.useState<templateModel | null>(null);
    const [selectedDynamicTemplate, setSelectedDynamicTemplate] = React.useState<sendGridTestData[]>([]);
    const [subject, setSubject] = React.useState<string | null>(null);
    const [isPreviousActive, setIsPreviousActive] = React.useState<boolean>(false);
    const [isNextActive, setIsNextActive] = React.useState<boolean>(false);
    const [activeKey, setActiveKey] = React.useState(1);
    const [emailSendingInProgress, setEmailSendingInProgress] = React.useState<boolean>(false);
    const [emailSendingError, setEmailSendingError] = React.useState<boolean>(false);
    const [emailSendingSuccess, setEmailSendingSuccess] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (templateModel?.testData) {
            setSelectedDynamicTemplate(templateModel.testData!);
            enableDirectionalChoice();
        }
    }, [templateModel])

    React.useEffect(() => {
        if (templateModel) {
            setSubject(templateModel!.subject ?? null)
        }

    }, [templateModel])

    React.useEffect(() => {
        if (activeKey == 1) {
            setIsPreviousActive(false);
            setIsNextActive(true);
        }
        else if (activeKey == 3) {
            setIsPreviousActive(true);
            setIsNextActive(false);
        }

        else if (activeKey == 2) {
            setIsPreviousActive(true);
            setIsNextActive(true);
        }
    }, [activeKey])

    const sendOnClick = async () => {
        setEmailSendingInProgress(true);

        var response = await sendEmail(props.dynamicsUrl, props.apiKeyText, templateModel?.id!, props.emailAddressText,
            props.senderEmailAddress, subject, selectedDynamicTemplate);
        
        setEmailSendingInProgress(false);

        if(response.status !== responseType.Success){
            setEmailSendingError(true);
        }
        else{
            setEmailSendingSuccess(true);
        }
    }

    const tabChanged = (eventKey: any, event: any) => {
        setActiveKey(eventKey as number)
    }

    const prevClicked = () => {
        let newActiveKey = activeKey - 1;
        setActiveKey(newActiveKey);
    }

    const nextClicked = () => {
        let newActiveKey = activeKey + 1;
        setActiveKey(newActiveKey);
    }

    const enableDirectionalChoice = () => {
        if (templateModel) {
            if (activeKey == 1) {
                setIsPreviousActive(false);
                setIsNextActive(true);
            }
            else if (activeKey == 3) {
                setIsPreviousActive(true);
                setIsNextActive(false);
            }

            else if (activeKey == 3) {
                setIsPreviousActive(true);
                setIsNextActive(true);
            }
        }
        else {
            setIsPreviousActive(false);
            setIsNextActive(false);
        }
    }

    const setTemplateData = (templateData: sendGridTestData) => {
        const templatesToBeSaved = _.cloneDeep(selectedDynamicTemplate);
        const itemToBeChanged = _.find(templatesToBeSaved, { 'substitutionKey': templateData.substitutionKey });

        itemToBeChanged!.exampleValue = templateData.exampleValue;

        setSelectedDynamicTemplate(templatesToBeSaved);
    }

    const updateSubjectState = (templateData: sendGridTestData) => {
        setSubject(templateData.exampleValue!)
    }

    const cleanState = () => {
        setTemplateSearchingInProgress(false);
        setTemplateSearchError(false);
        setTemplateModel(null);
        setSelectedDynamicTemplate([]);
        setSubject(null);
        setIsPreviousActive(false);
        setIsNextActive(false);
        setActiveKey(1);
        setEmailSendingInProgress(false);
        setEmailSendingError(false);
        setEmailSendingSuccess(false);
    }

    const searchTemplateWithId = async (templateId: string | null) => {
        if(!templateId){
            return;
        }
        
        cleanState();
        setTemplateSearchingInProgress(true);        
        const response = await searchByTemplateId(templateId!, props.apiKeyText);
        if (isTemplateModel(response)) {
            const result = response as templateModel

            if (result.id) {
                setTemplateModel(result);
            }
            else {
                setTemplateSearchError(true);
            }
        }
        setTemplateSearchingInProgress(false);
    }
    return (
        <div className='container-fluid my-3'>
            <EmailAddressComponent emailAddress={props.emailAddressText}></EmailAddressComponent>
            <TabContainerComponent emailAddressText={props.emailAddressText} apiKey={props.apiKeyText}
                searchByTemplateId={searchTemplateWithId}
                templateSearchingInProgress={templateSearchingInProgress}
                templateModel={templateModel}
                setTemplateData={setTemplateData}
                updateSubject={updateSubjectState}
                subject={subject}
                activeKey={activeKey}
                tabChanged={tabChanged}
                sendOnClicked={sendOnClick}
                emailSendingInProgress={emailSendingInProgress}
                cleanState={cleanState}></TabContainerComponent>

            {templateSearchError ?
                <NotificationComponent notificationType={notificationType.Error} notificationText='Error while searching the template via id. Please make sure the template with the specified id exists in Sendgrid' ></NotificationComponent>
                : null}

            {emailSendingError ?
                <NotificationComponent notificationType={notificationType.Error} notificationText='Error while sending the email. Please check the plugin tracelog or the browser console for more details' ></NotificationComponent>
                : null}
            {emailSendingSuccess ?
                <NotificationComponent notificationType={notificationType.Success} notificationText='Successfully send the email.' ></NotificationComponent>
                : null}
        </div>
    )
}

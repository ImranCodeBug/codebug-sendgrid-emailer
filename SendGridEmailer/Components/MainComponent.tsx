import * as React from 'react'
import { sendGridTestData, templateModel } from '../Models/TemplateModel'
import { searchByTemplateId } from '../Services/SendGridService'
import { isTemplateModel } from '../Services/UtilService'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'
import * as _ from 'lodash'
import { NavigationComponent } from './NavigationComponent'
import { sendEmail } from '../Services/EmailService'

interface Props {
    emailAddressText: string
    apiKeyText: string
}

export const MainComponent = (props: Props) => {
    const [templateSearchingInProgress, setTemplateSearchingInProgress] = React.useState(false);
    const [templateModel, setTemplateModel] = React.useState<templateModel | null>(null);
    const [selectedDynamicTemplate, setSelectedDynamicTemplate] = React.useState<sendGridTestData[]>([]);
    const [subject, setSubject] = React.useState<string | null>(null);
    const [isPreviousActive, setIsPreviousActive] = React.useState<boolean>(false);
    const [isNextActive, setIsNextActive] = React.useState<boolean>(false);
    const [activeKey, setActiveKey] = React.useState(1);
    
    React.useEffect(() => {
        if (templateModel?.testData) {
            setSelectedDynamicTemplate(templateModel.testData!);
            enableDirectionalChoice();
        }
    }, [templateModel])

    React.useEffect(() => {
        if(templateModel){
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

    const sendOnClick = async() =>{
        await sendEmail(props.apiKeyText, templateModel?.id!, props.emailAddressText,
            'IC@deshibhai.com', subject, selectedDynamicTemplate);
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


    const searchTemplateWithId = async (templateId: string) => {
        setTemplateSearchingInProgress(true);
        const response = await searchByTemplateId(templateId, props.apiKeyText);
        if (isTemplateModel(response)) {
            const result = response as templateModel
            setTemplateModel(result);            
        }
        setTemplateSearchingInProgress(false);
    }
    return (
        <div className='container-fluid'>
            <EmailAddressComponent emailAddress={props.emailAddressText}></EmailAddressComponent>
            <TabContainerComponent emailAddressText={props.emailAddressText} apiKey={props.apiKeyText}
                searchByTemplateId={searchTemplateWithId}
                templateSearchingInProgress={templateSearchingInProgress}
                templateModel={templateModel}
                setTemplateData={setTemplateData}
                updateSubject={updateSubjectState}
                subject={subject}
                activeKey={activeKey}
                tabChanged={tabChanged}></TabContainerComponent>

            {templateModel ?
                <NavigationComponent
                    isNextActive={isNextActive}
                    isPreviousActive={isPreviousActive}
                    prevClicked={prevClicked}
                    nextClicked={nextClicked}
                    sendOnClicked={sendOnClick}></NavigationComponent>
                : null}
        </div>
    )
}

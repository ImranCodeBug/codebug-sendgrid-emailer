import * as React from 'react'
import { sendGridTestData, templateModel } from '../Models/TemplateModel'
import { searchByTemplateId } from '../Services/SendGridService'
import { isTemplateModel } from '../Services/UtilService'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'
import * as _ from 'lodash'

interface Props {
    emailAddressText : string
    apiKeyText : string
}

export const MainComponent = (props: Props) => {
    const [templateSearchingInProgress, setTemplateSearchingInProgress] = React.useState(false);
    const [templateModel, setTemplateModel] = React.useState<templateModel | null>(null);
    const [selectedDynamicTemplate, setSelectedDynamicTemplate] = React.useState<sendGridTestData[]>([]);
    const [subject, setSubject] = React.useState<string | null>(null);

    React.useEffect(() => {
        if(templateModel?.testData){
            setSelectedDynamicTemplate(templateModel.testData!)
        }
    },[templateModel])

    const setTemplateData = (templateData : sendGridTestData) => {
        const templatesToBeSaved = _.cloneDeep(selectedDynamicTemplate);
        const itemToBeChanged = _.find(templatesToBeSaved, {'substitutionKey' : templateData.substitutionKey});
        console.log(itemToBeChanged)
        itemToBeChanged!.exampleValue = templateData.exampleValue;

        setSelectedDynamicTemplate(templatesToBeSaved);
    }

    const updateSubjectState = (templateData : sendGridTestData) => {
        setSubject(templateData.exampleValue!)
    }


    const searchTemplateWithId = async(templateId : string) => {
        setTemplateSearchingInProgress(true);        
        const response = await searchByTemplateId(templateId, props.apiKeyText);
        if(isTemplateModel(response)){
            setTemplateModel(response as templateModel);
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
                updateSubject={updateSubjectState}></TabContainerComponent>            
        </div>
    )
}

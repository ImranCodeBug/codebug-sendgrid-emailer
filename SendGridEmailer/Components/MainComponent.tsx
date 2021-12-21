import * as React from 'react'
import { templateModel } from '../Models/TemplateModel'
import { searchByTemplateId } from '../Services/SendGridService'
import { isTemplateModel } from '../Services/UtilService'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'

interface Props {
    emailAddressText : string
    apiKeyText : string
}

export const MainComponent = (props: Props) => {
    const [templateSearchingInProgress, setTemplateSearchingInProgress] = React.useState(false);
    const [templateModel, setTemplateModel] = React.useState<templateModel | null>(null);

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
                templateModel={templateModel}></TabContainerComponent>            
        </div>
    )
}

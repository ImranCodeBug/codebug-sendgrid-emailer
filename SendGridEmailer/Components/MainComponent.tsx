import * as React from 'react'
import { MouseEventHandler } from 'react'
import { TabContainer } from 'react-bootstrap'
import { searchByTemplateId } from '../Services/SendGridService'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'

interface Props {
    emailAddressText : string
    apiKeyText : string

}

export const MainComponent = (props: Props) => {
    const [templateSearchingInProgress, setTemplateSearchingInProgress] = React.useState(false);

    const searchTemplateWithId = async(templateId : string) => {
        await searchByTemplateId(templateId, props.apiKeyText);
    }
    return (
        <div className='container-fluid'>
            <EmailAddressComponent emailAddress={props.emailAddressText}></EmailAddressComponent>
            <TabContainerComponent emailAddressText={props.emailAddressText} apiKey={props.apiKeyText} 
                searchByTemplateId={searchTemplateWithId} templateSearchingInProgress={templateSearchingInProgress}></TabContainerComponent>            
        </div>
    )
}

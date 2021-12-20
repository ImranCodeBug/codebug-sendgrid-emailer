import * as React from 'react'
import { TabContainer } from 'react-bootstrap'
import EmailAddressComponent from './EmailAddressComponent'
import { TabContainerComponent } from './TabContainerComponent'

interface Props {
    emailAddressText : string
    apiKeyText : string

}

export const MainComponent = (props: Props) => {
    

    return (
        <div className='container-fluid'>
            <EmailAddressComponent emailAddress={props.emailAddressText}></EmailAddressComponent>
            <TabContainerComponent emailAddressText={props.emailAddressText} apiKey={props.apiKeyText}></TabContainerComponent>
        </div>
    )
}

import * as React from 'react'
import { TabContainer } from 'react-bootstrap'
import { TabContainerComponent } from './TabContainerComponent'

interface Props {
    EmailAddressText : string
    ApiKeyText : string

}

export const MainComponent = (props: Props) => {
    

    return (
        <div className='container-fluid'>
            <TabContainerComponent EmailAddressText={props.EmailAddressText} ApiKey={props.ApiKeyText}></TabContainerComponent>
        </div>
    )
}

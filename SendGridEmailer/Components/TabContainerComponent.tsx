import * as React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

interface Props {
    EmailAddressText: string
    ApiKey: string
}

export const TabContainerComponent = (props: Props) => {
    return (
        <Tabs defaultActiveKey="email" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="email" title="Email">
          Hi bi
        </Tab>        
        <Tab eventKey="templateDetails" title="Template Details" disabled>
          
        </Tab>
      </Tabs>
    )
}

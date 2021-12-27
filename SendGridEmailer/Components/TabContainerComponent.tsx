import * as React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { sendGridTestData, templateModel } from '../Models/TemplateModel'
import { DynamicDataContainer } from './DynamicDataContainer'
import { SearchTemplateComponent } from './SearchTemplateComponent'
import TemplateDetailsComponent from './TemplateDetailsComponent'
import * as _ from 'lodash'
import { EmailSummary } from './EmailSummary'

interface Props {
    emailAddressText: string
    apiKey: string,
    searchByTemplateId: (templateId: string) => void,
    templateSearchingInProgress: boolean
    templateModel: templateModel | null
    setTemplateData: (items: sendGridTestData) => void,
    updateSubject: (items: sendGridTestData) => void,
    subject: string | null,
    activeKey : number
    tabChanged : (eventKey: any, event: any) => void,
    sendOnClicked : () => void
}

export const TabContainerComponent = (props: Props) => {
    return (
        <Tabs id="uncontrolled-tab-example" className="mb-3"
            activeKey={props.activeKey}
            onSelect={props.tabChanged} >
            <Tab eventKey="1" title="Search">
                <SearchTemplateComponent searchByTemplateId={props.searchByTemplateId}
                    templateSearchingInProgress={props.templateSearchingInProgress}></SearchTemplateComponent>

                {props.templateModel ?
                    <TemplateDetailsComponent templateModel={props.templateModel!}></TemplateDetailsComponent>
                    : null}
            </Tab>
            <Tab eventKey="2" title="Dynamic Data" disabled={props.templateModel === null}>
                {props.templateModel ?
                    <DynamicDataContainer subject={props.templateModel!.subject!}
                        substitution={props.templateModel!.testData}
                        setDynamicTemplateData={props.setTemplateData}
                        updateSubject={props.updateSubject}></DynamicDataContainer>
                    : null}
            </Tab>

            <Tab eventKey="3" title="Send Email" disabled={props.templateModel === null}>
                <EmailSummary emailAddress={props.emailAddressText} 
                subject={props.subject}
                sendOnClicked={props.sendOnClicked}></EmailSummary>
            </Tab>
        </Tabs>

    )
}

import * as React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { templateModel } from '../Models/TemplateModel'
import { DynamicDataContainer } from './DynamicDataContainer'
import { SearchTemplateComponent } from './SearchTemplateComponent'
import TemplateDetailsComponent from './TemplateDetailsComponent'

interface Props {
    emailAddressText: string
    apiKey: string,
    searchByTemplateId: (templateId: string) => void,
    templateSearchingInProgress: boolean;
    templateModel : templateModel | null
}


{/* <i class="fas fa-search"></i> */ }
export const TabContainerComponent = (props: Props) => {


    return (
        <Tabs defaultActiveKey="search" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="search" title="Search">
                <SearchTemplateComponent searchByTemplateId={props.searchByTemplateId}
                    templateSearchingInProgress={props.templateSearchingInProgress}></SearchTemplateComponent>
                    
                    {props.templateModel ? 
                        <TemplateDetailsComponent templateModel={props.templateModel!}></TemplateDetailsComponent> 
                    :null}
            </Tab>
            <Tab eventKey="data" title="Dynamic Data" disabled={props.templateModel === null}>                                        
                    {props.templateModel? 
                        <DynamicDataContainer subject={props.templateModel!.subject!} 
                        substitution={props.templateModel!.testData}></DynamicDataContainer>
                    :null}
            </Tab>

            <Tab eventKey="send" title="Send Email" disabled={props.templateModel === null}>

            </Tab>
        </Tabs>
    )
}

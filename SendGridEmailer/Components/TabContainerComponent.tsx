import * as React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { SearchTemplateComponent } from './SearchTemplateComponent'
import TemplateDetailsComponent from './TemplateDetailsComponent'

interface Props {
    emailAddressText: string
    apiKey: string,
    searchByTemplateId: (templateId: string) => void,
    templateSearchingInProgress: boolean
}


{/* <i class="fas fa-search"></i> */ }
export const TabContainerComponent = (props: Props) => {


    return (
        <Tabs defaultActiveKey="search" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="search" title="Search">
                <SearchTemplateComponent searchByTemplateId={props.searchByTemplateId}
                    templateSearchingInProgress={props.templateSearchingInProgress}></SearchTemplateComponent>
                <TemplateDetailsComponent></TemplateDetailsComponent>

            </Tab>
            <Tab eventKey="data" title="Dynamic Data">

                <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Subject</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="Subject" aria-label="Subject" aria-describedby="Subject" />
                    </div>
                </div>

                <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Test Data</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="TestData" aria-label="TestData" aria-describedby="TestData" />
                    </div>
                </div>


            </Tab>

            <Tab eventKey="send" title="Send Email">

            </Tab>
        </Tabs>
    )
}

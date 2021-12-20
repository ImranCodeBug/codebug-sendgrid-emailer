import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


interface Props {
    emailAddressText: string
    apiKey: string
}


{/* <i class="fas fa-search"></i> */ }
export const TabContainerComponent = (props: Props) => {
    return (
        <Tabs defaultActiveKey="email" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="email" title="Email">
                <div className='d-flex'>
                    <div className='flex-row input-group'>
                        <span className="input-group-text"><FontAwesomeIcon className='text-secondary' icon={faSearch} /></span>
                        <input type="text" className="form-control" placeholder="Template Id" aria-label="Template Id" aria-describedby="template-search" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>

                <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Name</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="Name" aria-label="Name" aria-describedby="Name" disabled />
                    </div>
                </div>

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
            <Tab eventKey="templateDetails" title="Template Details">
            <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Updated At</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="UpdatedAt" aria-label="UpdatedAt" aria-describedby="UpdatedAt" disabled />
                    </div>
                </div>

                <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Content</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="Content" aria-label="Content" aria-describedby="Content" disabled />
                    </div>
                </div>

                <div className='row mx-2 mt-2'>
                    <div className='col-2 pt-1 text-start'>
                        <label>Thumbnail</label>
                    </div>
                    <div className='col'>
                        <input type="text" className='w-100 border rounded' placeholder="Thumbnail" aria-label="Thumbnail" aria-describedby="Thumbnail" disabled />
                    </div>
                </div>

            </Tab>
        </Tabs>
    )
}

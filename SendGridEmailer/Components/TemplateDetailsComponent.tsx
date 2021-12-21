import * as React from 'react'
import { templateModel } from '../Models/TemplateModel'
import TemplateContentComponent from './TemplateContentComponent'

interface Props {
    templateModel : templateModel
}

const TemplateDetailsComponent = (props: Props) => {
    return (
        <div>
            <div className='row mx-2 mt-2'>
                <div className='col-2 pt-1 text-start'>
                    <label>Name</label>
                </div>
                <div className='col'>
                    <input type="text" className='w-100 border rounded' placeholder="Name" aria-label="Name" aria-describedby="Name" disabled value={props.templateModel.name} />
                </div>
            </div>

            <div className='row mx-2 mt-2'>
                <div className='col-2 pt-1 text-start'>
                    <label>Updated At</label>
                </div>
                <div className='col'>
                    <input type="text" className='w-100 border rounded' placeholder="UpdatedAt" aria-label="UpdatedAt" aria-describedby="UpdatedAt" disabled value={props.templateModel.updatedAt} />
                </div>
            </div>

            {props.templateModel.htmlContent ? 
                <TemplateContentComponent codeString={props.templateModel.htmlContent!}></TemplateContentComponent>
            :null}

            {props.templateModel.thumbnailUrl? 
            <div className='row mx-2 mt-2'>
                <div className='col-2 pt-1 text-start'>
                    <label>Thumbnail</label>
                </div>
                <div className='col'>
                    <img src={props.templateModel.thumbnailUrl!} />
                </div>
            </div>
            :null}


        </div>
    )
}

export default TemplateDetailsComponent

import * as React from 'react'
import { templateModel } from '../Models/TemplateModel'
import TemplateContentComponent from './TemplateContentComponent'
import { ThumbnailComponent } from './ThumbnailComponent'

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
            {/* <TemplateContentComponent codeString={props.templateModel.htmlContent}></TemplateContentComponent> */}
            <ThumbnailComponent thumbnailUrl={props.templateModel.thumbnailUrl}></ThumbnailComponent>
        </div>
    )
}

export default TemplateDetailsComponent

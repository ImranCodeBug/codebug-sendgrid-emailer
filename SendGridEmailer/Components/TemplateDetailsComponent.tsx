import * as React from 'react'

interface Props {

}

const TemplateDetailsComponent = (props: Props) => {
    return (
        <div>
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


        </div>
    )
}

export default TemplateDetailsComponent

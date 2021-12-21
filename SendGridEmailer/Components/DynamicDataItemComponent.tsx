import * as React from 'react'
import { sendGridTestData } from '../Models/TemplateModel'

interface Props {
    key : string,
    dataElement: sendGridTestData
    defaultValue? : string
}

export const DynamicDataItemComponent = (props: Props) => {
    const {substitutionKey, exampleValue} = props.dataElement;
    return (
        <div className='row mx-2 mt-2'>
            <div className='col-2 pt-1 text-start text-truncate'>
                <label data-toggle="tooltip" data-placement="top" title={substitutionKey}>{substitutionKey}</label>
            </div>
            <div className='col'>
                <input type="text" className='w-100 border rounded' placeholder={`eg..${exampleValue}`} aria-label="UpdatedAt" aria-describedby="UpdatedAt" defaultValue={props.defaultValue} />
            </div>
        </div>
    )
}

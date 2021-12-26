import * as React from 'react'
import { sendGridTestData } from '../Models/TemplateModel'

interface Props {
    key : string,
    dataElement: sendGridTestData
    defaultValue? : string
    setDynamicTemplateData : (item : sendGridTestData) => void
}

export const DynamicDataItemComponent = (props: Props) => {
    const dataItemValue = React.useRef<HTMLInputElement>(null);

    const itemValueOnBlur = () => {
        const currentValue = dataItemValue.current?.value;
        const dataItem = {
            substitutionKey : props.key,
            exampleValue : currentValue
        }
        props.setDynamicTemplateData(dataItem);
    }

    //onBlur={() => props.searchByTemplateId(inpTemplateId.current?.value!)}
    const {substitutionKey, exampleValue} = props.dataElement;
    return (
        <div className='row mx-2 mt-2'>
            <div className='col-2 pt-1 text-start text-truncate'>
                <label data-toggle="tooltip" data-placement="top" title={substitutionKey}>{substitutionKey}</label>
            </div>
            <div className='col'>
                <input type="text" className='w-100 border rounded' 
                placeholder={`eg..${exampleValue}`} aria-label="UpdatedAt" ref={dataItemValue}
                aria-describedby="UpdatedAt" defaultValue={props.defaultValue} 
                onBlur={() => itemValueOnBlur()}/>
            </div>
        </div>
    )
}

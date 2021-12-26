import * as React from 'react'
import { sendGridTestData } from '../Models/TemplateModel'
import { DynamicDataItemComponent } from './DynamicDataItemComponent'

interface Props {    
    subject : string,
    substitution? : sendGridTestData[]
    setDynamicTemplateData : (items : sendGridTestData) =>void
}

export const DynamicDataContainer = (props: Props) => {
    const subjectItem : sendGridTestData = {
        substitutionKey : "Subject",
        exampleValue : ""
    }
    return (        
        <>
        <DynamicDataItemComponent key="Subject" 
        dataElement={subjectItem} defaultValue={props.subject}
        setDynamicTemplateData={props.setDynamicTemplateData}></DynamicDataItemComponent>

        {props.substitution? 
            props.substitution!.map(t =>
                <DynamicDataItemComponent key={t.substitutionKey} dataElement={t} 
                setDynamicTemplateData={props.setDynamicTemplateData}></DynamicDataItemComponent>
            )
        :null}
        </>
    )
}

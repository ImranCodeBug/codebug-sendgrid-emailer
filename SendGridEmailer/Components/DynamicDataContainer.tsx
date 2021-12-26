import * as React from 'react'
import { sendGridTestData } from '../Models/TemplateModel'
import { DynamicDataItemComponent } from './DynamicDataItemComponent'
import { SubjectComponent } from './SubjectComponent'

interface Props {    
    subject : string,
    substitution? : sendGridTestData[]
    setDynamicTemplateData : (items : sendGridTestData) =>void,
    updateSubject : (items : sendGridTestData) =>void,
}

export const DynamicDataContainer = (props: Props) => {
    const subjectItem : sendGridTestData = {
        substitutionKey : "Subject",
        exampleValue : ""
    }
    return (        
        <>
        <SubjectComponent  
        dataElement={subjectItem} defaultValue={props.subject}
        setDynamicTemplateData={props.updateSubject}></SubjectComponent>
        
        {props.substitution? 
            props.substitution!.map(t =>
                <DynamicDataItemComponent key={t.substitutionKey} dataElement={t} 
                setDynamicTemplateData={props.setDynamicTemplateData}></DynamicDataItemComponent>
            )
        :null}
        </>
    )
}

import * as React from 'react'

interface Props {
    emailAddress : string,
    subject : string | null
}

export const EmailSummary = (props: Props) => {
    return (
        <div className='row'>
            <div className='col-12 text-wrap'>
                You are about to send an email to <code>{props.emailAddress}</code> with a subject <mark className='fw-bold'>{props.subject}</mark>. Please click on Send Email button to send the email. 
            </div>            
        </div>
    )
}

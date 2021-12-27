import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface Props {
    emailAddress : string,
    subject : string | null,
    sendOnClicked : () => void
}

export const EmailSummary = (props: Props) => {
    return (
        <>
        <div className='row'>
            <div className='col-12 text-wrap'>
                You are about to send an email to <code>{props.emailAddress}</code> with a subject <mark className='fw-bold'>{props.subject}</mark>. Please click on Send Email button to send the email. 
            </div>            
        </div>
        <div className='row'>
        <div className='col'>
                <button type="button" className="btn btn-outline-success float-end" 
                    onClick={() => props.sendOnClicked()}>
                    <FontAwesomeIcon className='text-outline-success' icon={faPaperPlane} />
                    &nbsp;
                    Send</button>
            </div>
        </div>
        </>
    )
}

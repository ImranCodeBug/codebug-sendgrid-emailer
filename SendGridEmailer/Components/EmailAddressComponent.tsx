import * as React from 'react'

interface Props {
    emailAddress : string
}

const EmailAddressComponent = (props: Props) => {
    return (
        <div className='input-group mt-1 mb-3'>            
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="Email" disabled value={props.emailAddress}/>
        </div>
    )
}

export default EmailAddressComponent

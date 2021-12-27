import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface Props {
    searchByTemplateId: (templateId: string | null) => void
    templateSearchingInProgress: boolean,
    cleanState : () => void
}

export const SearchTemplateComponent = (props: Props) => {
    const inpTemplateId = React.useRef<HTMLInputElement>(null);

    const inputOnBlur = () => {
        console.log(inpTemplateId.current?.value)
        props.cleanState();
    }

    const inputKeyPress = (e : any) =>{
        if(e.keyCode === 13){
            props.searchByTemplateId(inpTemplateId.current?.value!)
        }
    }
    
    return (
        <div className='d-flex'>
            <div className='flex-row input-group'>
                <span className="input-group-text"><FontAwesomeIcon className='text-secondary' icon={faSearch} /></span>
                <input type="text" className="form-control" ref={inpTemplateId} placeholder="Template Id" aria-label="Template Id" aria-describedby="template-search" 
                    onBlur={() => inputOnBlur()} onKeyDown={inputKeyPress} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => props.searchByTemplateId(inpTemplateId.current?.value!)}>
                    {props.templateSearchingInProgress ?
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        : null}
                    &nbsp;
                    Search</button>
            </div>
        </div>
    )
}

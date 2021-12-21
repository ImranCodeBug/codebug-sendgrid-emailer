import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface Props {
    searchByTemplateId: (templateId: string) => void
    templateSearchingInProgress: boolean
}

export const SearchTemplateComponent = (props: Props) => {
    const inpTemplateId = React.useRef<HTMLInputElement>(null);

    return (
        <div className='d-flex'>
            <div className='flex-row input-group'>
                <span className="input-group-text"><FontAwesomeIcon className='text-secondary' icon={faSearch} /></span>
                <input type="text" className="form-control" ref={inpTemplateId} placeholder="Template Id" aria-label="Template Id" aria-describedby="template-search" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onBlur={() => props.searchByTemplateId(inpTemplateId.current?.value!)} onClick={() => props.searchByTemplateId(inpTemplateId.current?.value!)}>
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

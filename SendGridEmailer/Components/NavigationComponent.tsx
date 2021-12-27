import * as React from 'react'
import { faChevronLeft, faChevronRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isPreviousActive : boolean,
    isNextActive : boolean,
    prevClicked : () => void
    nextClicked : () => void    
}

export const NavigationComponent = (props: Props) => {
    return (
        <div className='row mt-2'>
            <div className='col align-self-center'>
                <button type="button" className="btn btn-outline-primary" 
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Previous"
                    disabled={!props.isPreviousActive} onClick={() => props.prevClicked()}>
                    <FontAwesomeIcon className='text-outline-primary' icon={faChevronLeft} />
                </button>
                <button type="button" className="btn btn-outline-primary" 
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Next"
                    disabled={!props.isNextActive} onClick={() => props.nextClicked()}>
                    <FontAwesomeIcon className='text-outline-primary' icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

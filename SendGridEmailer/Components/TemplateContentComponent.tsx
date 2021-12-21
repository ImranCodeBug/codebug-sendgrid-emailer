import * as React from 'react'
import { Button, Modal } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    codeString: string
}

const customStyle = {

}

const TemplateContentComponent = (props: Props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="row mx-2 mt-2">
            <div className='col-2 pt-1 text-start'>
                <label>Content</label>
            </div>
            <div className='col text-start'>
                <a href="#" onClick={handleShow} className="link-secondary">
                    Click to view (opens a modal)
                </a>
                
                <Modal show={show} size="lg" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Content</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SyntaxHighlighter language="javascript"
                        style={materialLight} wrapLongLines wrapLines >
                        {props.codeString}
                    </SyntaxHighlighter></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>


    )
}

export default TemplateContentComponent

import * as React from 'react'
import SyntaxHighlighter  from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    codeString : string
}

const TemplateContentComponent = (props: Props) => {
    return (
        <SyntaxHighlighter language="javascript" style={materialLight} wrapLongLines wrapLines>
                    {props.codeString}
        </SyntaxHighlighter>
    )
}

export default TemplateContentComponent

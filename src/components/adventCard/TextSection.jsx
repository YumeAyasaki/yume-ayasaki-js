import React from 'react'

import './AdventCard.css'

function TextSection(props) {
    var index = props.name + ":";
    var content = props.content;
    var firstLine = props.firstLine ? "first-line" : "";
    return (
        <div className="text__wrapper" id={firstLine}>
            <div className="text__index">{index}</div>
            <div className="text__content">{content}</div>
            {/* {index}
            {content}
            {firstLine} */}
        </div>
    )
}

export default TextSection
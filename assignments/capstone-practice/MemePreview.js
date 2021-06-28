import React from 'react'

function MemePreview(props) {
    
    return (
        <div>
            <img src={props.url}/>
            <p> {props.topText}</p>
            <p> {props.bottomText}</p>
        </div>
    )
}
//css would take text and put it over image

export default MemePreview
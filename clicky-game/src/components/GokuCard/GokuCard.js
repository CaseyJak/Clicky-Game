import React from "react";
import "./GokuCard.css"

function GokuCard(props) {
    return (
        <div onClick={() => props.clickGoku(props.id)}>
            <img className="GokuCard" alt={props.name} src={props.image}/>
        </div>
    )
}

export default GokuCard
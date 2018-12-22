import React from "react";
import "./GokuCard.css"

function GokuCard(props) {
    return (
        <div>
            <img className="GokuCard" alt={props.name} src={props.image}/>
        </div>
    )
}

export default GokuCard
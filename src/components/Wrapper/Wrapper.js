import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    return (<div className="wrapper">{props.children}</div>);
}

// Wrapper = (props) => (
//     <div className="wrapper">{props.children}</div>
// )

export default Wrapper;
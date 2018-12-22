import React from "react";

function Wrapper(props) {
    return (<div className="wrapper">{props.children}</div>);
}

// Wrapper = (props) => (
//     <div className="wrapper">{props.children}</div>
// )

export default Wrapper;
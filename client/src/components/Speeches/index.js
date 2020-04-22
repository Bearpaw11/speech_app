import React from "react";
import star from "../../pics/star.png"

function Speeches(props) {

    return (
        <div>
            <a href={props.url}>{props.userName}</a>
            <img src={star}></img> 
        </div>
    )
}

export default Speeches;
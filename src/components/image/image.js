import React from "react";

const Image = props => {
    return (
        <div className="imgContainer">
            <img src={props.img} className="img" />
        </div>
    )  
}

export default Image;
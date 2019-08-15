import React from "react";
import { Image } from "semantic-ui-react";

const Img = props => {
    return (
        <Image src={props.img} wrapped ui={false} />
    )  
}

export default Img;
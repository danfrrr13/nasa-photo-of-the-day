import React from "react";
import { Card } from "semantic-ui-react";

const Title = props => {
    return (
        <Card.Header>
            {props.title}
        </Card.Header>
    )  
}

export default Title;
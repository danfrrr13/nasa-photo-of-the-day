import React from "react";
import { Card } from "semantic-ui-react";

const Explanation = props => {
    return (
        <Card.Description>
            {props.explanation}
        </Card.Description>
    )  
}

export default Explanation;
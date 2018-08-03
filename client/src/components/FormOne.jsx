import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let FormOne = ({handleChange, onSubmit, owner, repo, event, e}) => {
    return (
        <div>
            <h4>Please Enter Your Repo Information:</h4>
            <Row>
                <Input type="text" id="owner" label="Owner:" onChange={(e) => handleChange(e)}/>
                <Input type="text" id="repo" label="Repo:" onChange={(e) => handleChange(e)}/>
                <Input type="text" id="event" label="Event:" onChange={(e) => handleChange(e)}/>
                <Button waves="light" onClick={(e) => onSubmit(e)} id="display">DISPLAY</Button>
            </Row>
        </div>
    )
}

export default FormOne;
import React from 'react';
import {Row, Input} from 'react-materialize'

let FormOne = ({onSubmit, event}) => {
    return (
        <div>
            <h3>Please Enter Your Contact Information:</h3>
            <Row>
                <Input type="text" id="owner" className="f1" label="Owner:"/>
                <Input type="text" id="repo" className="f1" label="Repo:"/>
                <Input type="text" id="event" className="f1" label="Event:"/>
                <Input type="submit" onClick={(event) => onSubmit(event)} value="DISPLAY"/>
            </Row>
        </div>
    )
}

export default FormOne;
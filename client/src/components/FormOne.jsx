import React from 'react';
import ReactDOM from 'react';
import {Row, Input, Button} from 'react-materialize'

let FormOne = ({handleChange, onSubmit, owner, repo, events, e}) => {
    return (
        <div>
            <p>Please Enter Your Repo Information:</p>
            <Row>
                <Input type="text" id="owner" label="Owner:" onChange={(e) => handleChange(e)}/>
                <Input type="text" id="repo" label="Repo:" onChange={(e) => handleChange(e)}/>
                <Input 
                    type='select' 
                    id='event'
                    s={3} 
                    label="Event Type" 
                    defaultValue='2' 
                    onChange={(e) => handleChange(e)}
                >
                    {events.map((event, key) => {
                        return <option key={event} value={event}>{event}</option>
                    })}
                </Input>
                <Button waves="light" className="hoverable" onClick={(e) => onSubmit(e)} id="display">DISPLAY</Button>
            </Row>
        </div>
    )
}

export default FormOne;
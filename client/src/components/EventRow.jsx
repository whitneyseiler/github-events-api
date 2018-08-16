import React from 'react';
import Actor from './Actor.jsx';

let EventRow = ({event}) => {

    return (
        <tr>
            <td>{event.type}</td>
            <td>{event.id}</td>
            <td>{event.created_at}</td>
            <td><Actor url={event.actor.url} login={event.actor.login}/></td>
            <td>{event.actor.id}</td>
        </tr>
    )
}

export default EventRow;
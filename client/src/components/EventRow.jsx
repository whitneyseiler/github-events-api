import React from 'react';

let EventRow = (props) => {
    let event = props[0];
    
    return (
        <tr>
            <td value={event.type}>{event.type}</td>
            <td value={event.id}>{event.id}</td>
            <td value={event.created_at}>{event.created_at}</td>
            <td value={event.actor}>{event.actor}</td>
            <td value={event.actor_id}>{event.actor_id}</td>
        </tr>
    )
}

export default EventRow;
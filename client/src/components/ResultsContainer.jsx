import React from 'react';
import EventRow from './EventRow.jsx';

let ResultsContainer = ({display, results, eventType}) => {
    
    return (
        //note: classNames are Materialize classes
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Results</span>
                <table>
                    <thead>
                        <tr>
                            <th>Event Type</th>
                            <th>Event ID</th>
                            <th>TimeStamp</th>
                            <th>Actor</th>
                            <th>Actor ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {display ? 
                            //if 'display' is true, results have been returned
                            //populate table with results matching user selected event type
                            results.map((event, key) => {
                                if (event.type === eventType) {
                                    return <EventRow key={event.id} {...[event]} />
                                }
                            }) : 
                            //if 'display' is false, no results have been found
                            <tr><td>No data to display...</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultsContainer;
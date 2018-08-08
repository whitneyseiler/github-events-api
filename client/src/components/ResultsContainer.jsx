import React from 'react';
import EventRow from './EventRow.jsx';

let ResultsContainer = ({display, results}) => {
    
    return (
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
                            results.map((event, key) => {
                                let temp = [event]
                                return <EventRow {...temp} key={event.id} />
                            }) : 
                            <tr><td>No data to display...</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultsContainer;
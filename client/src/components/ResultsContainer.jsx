import React from 'react';

let ResultsContainer = ({results}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Results</span>
                        {results}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer;
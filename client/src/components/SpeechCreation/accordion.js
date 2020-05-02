import React from 'react';

function Accordion (props) {

return ( 
    <div id="accordion recordingList">
        <div className="card accordCard">
            <div className="card-header recordingListItem">
                <h5 className="mb-0">
                        <button id="viewresults" data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="false" aria-controls={props.id} type="button" className="btn btn-info">View Results</button>
                </h5>
            </div>

        <div id={props.id} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                <p id="speechtitle"></p>
                <p id="textresults"></p>
                    <p id="textResultsPersonal"></p>
                    <p id="timeresult"></p>
            </div>
        </div>        
        
        </div>
    </div>
    )
}
export default Accordion;
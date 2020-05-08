import React from 'react';

function Accordion (props) {

return ( 
    <div id="accordion recordingList">
        <div className="card accordCard">
            <div className="card-header recordingListItem">
                <h5 className="mb-0">
                    <button id="viewresults" data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="false" aria-controls={props.id} type="button" className="btn btn-success">View Results</button>
                </h5>
            </div>

            <div id={props.id} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    <p className="darker" id="speechtitle"></p>
                    <p className="darker" id="textresults"></p>
                    <p className="darker" id="textResultsPersonal"></p>
                    <p className="darker" id="timeresult"></p>
                    <button type="button" className="btn btn-success savers" id="save">Save Recording</button><br /><br />

                </div>
            </div>         
        </div>
        
    </div>
    )
}
export default Accordion;
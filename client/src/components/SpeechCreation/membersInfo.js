import React from 'react';

function Recordings (props) {

return ( 
    <div id="accordion recordingList">
        <div class="card">
            <div class="card-header recordingListItem">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="true" aria-controls={props.id}>
                        Title: {props.speechTitle}
                    </button>
                </h5>
            </div>

        <div id={props.id} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                Filler Count: {props.analytics}
                Speech Length: {props.length}
            </div>
        </div>
    
            <button type="button" className="speechDeleter">Delete</button>
        
        </div>
    </div>

    )
}
export default Recordings;
import React from 'react';
import API from "../../utils/API"

function Recordings(props) {
    return (
        <div>
            <div id="accordion recordingList"><br />
                <div className="card accordCard">
                    <div className="card-header recordingListItem">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-target={`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
                                Title: {props.speechTitle}
                            </a>
                        </h5>
                    </div>

                    <div id={props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            Analysis: {props.analytics} <br />
                    Speech Length: {props.length}<br /><br />

                            <button onClick={() => props.delete(props.id)} className="speechDeleter">Delete</button><br />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Recordings;
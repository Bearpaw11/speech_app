import React from 'react';
import API from "../../utils/API"
import { useHistory } from "react-router-dom"

function Recordings (props) {
let history = useHistory();
  function speech() { 
       console.log(props.id)
        // let speechId = this.state.speech.record.id;
         
        
         API.deleteSpeech(
            props.id
         ).then(id => {
             window.location.reload();
             
        })
    }
    
    function relocation() {
        console.log("working")
    }
return ( 
    <div id="accordion recordingList">
        <div class="card accordCard">
            <div class="card-header recordingListItem">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
                        Title: {props.speechTitle}
                    </button>
                </h5>
            </div>

        <div id={props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                Analysis: {props.analytics} <br/> 
                Speech Length: {props.length}
            </div>
        </div>
    
            <button onClick={speech} type="button" className="speechDeleter">Delete</button>
        
        </div>
    </div>

    )
}
export default Recordings;
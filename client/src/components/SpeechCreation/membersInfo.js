import React from 'react';
import API from "../../utils/API"
import { useHistory } from "react-router-dom"

function Recordings (props) {
    console.log("recording: ", props);

// let history = useHistory();
//   function speech() { 
//        console.log(props.id)
//         // let speechId = this.state.speech.record.id;
         
//          API.deleteSpeech(
//             props.id
//          ).then(id => {
//              window.location.reload();
//         })
//     }
    
    // function relocation() {
    //     console.log("working")
    // }

return ( 
    <div>
        <div id="accordion recordingList"><br/>
            <div class="card accordCard">
                <div class="card-header recordingListItem">
                    <h5 class="mb-0">
                        <a data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
                            Title: {props.speechTitle}
                        </a>
                    </h5>
                </div>

<<<<<<< HEAD
    <div id="accordion recordingList"><br/>
        <div class="card accordCard">
            <div class="card-header recordingListItem">
                <h5 class="mb-0">
                    <a data-toggle="collapse" data-target= {`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
                        Title: {props.speechTitle}
                    </a>
                </h5>
            </div>

        <div id={props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                Analysis: {props.analytics} <br/> 
                Speech Length: {props.length}
                <br/><br/>
               

=======
            <div id={props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    Analysis: {props.analytics} <br/> 
                    Speech Length: {props.length}<br/><br/>
                
                        <button onClick={()=>props.delete(props.id)} className="speechDeleter">Delete</button><br/> 
                </div>
>>>>>>> 0b9ee2c2aa74fa6f6ac44fd85a4e5fe0c9b1d3ac
            </div>
        
        </div>
    </div>
    </div>

    )
}
export default Recordings;
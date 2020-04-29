import React from "react";
import Speeches from "../SpeechCreation/voiceapp.js";

function CreateSpeech(props) {
    return (
      <div>
   
        <Speeches userId={props.userId} />
        

      </div>
    )
}
export default CreateSpeech;
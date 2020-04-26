import React from "react";
import Speeches from "../SpeechCreation/voiceapp.js";

function CreateSpeech(props) {
    return (
      <div>
            {/* Box for transcription w/code */}
            {/* Timer running */}
        <Speeches userId={props.userId} />
        

      </div>
    )
}
export default CreateSpeech;
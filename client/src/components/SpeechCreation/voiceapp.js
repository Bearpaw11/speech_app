import React from "react";
import { useEffect } from 'react';

function Speeches() {

    function relocation() {
        window.location.href = "../Pages/ViewSpeeches.js";
    }

    useEffect(() => {
        voiceFunctionality();
    });

    //******* STARTING THE TIMER FUNCTION BEGINS HERE ********//
    function timer() {
        const minutesLabel = document.getElementById("minutes");
        const secondsLabel = document.getElementById("seconds");
        let totalSecs = 0;
        setInterval(setTime, 1000);

        function setTime() {
            ++totalSecs;
            secondsLabel.innerHTML = pad(totalSecs % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSecs / 60));
        }
        function pad(value) {
            const valueString = value + "";
            if (valueString.length < 2) {
                return "0" + valueString;
            } else {
                return valueString;
            }
        }
    }
    //******** STARTING THE TIMER FUNCTION ENDS HERE **********//

    function voiceFunctionality() {

        const searchForm = document.querySelector("#searchForm");
        const searchFormInput = searchForm.querySelector("input");
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {

            console.log("Your Browser supports speech Recognition")
            searchForm.insertAdjacentHTML("beforeend", '<button type="button" id="input"><i class="fas fa-microphone"></i></button>')

            const micBtn = searchForm.querySelector("button");
            const micIcon = micBtn.querySelector("i");

            const recognition = new SpeechRecognition();
            recognition.continuous = true;

            micBtn.addEventListener("click", micBtnClick)

            function micBtnClick() {
                if (micIcon.classList.contains("fa-microphone")) { //Start speech recognition
                    recognition.start();
                } else { //Stop Speech recognition
                    recognition.stop()
                }
            }

            recognition.onstart = function startSpeechRecogniton() { //beginning recording
                micIcon.classList.remove("fa-microphone")
                micIcon.classList.add("fa-microphone-slash")
                searchFormInput.focus();
                timer(); //Start Timer
                console.log("Speech recognition active.")
            }

            recognition.onend = function endSpeechRecognition() { //ending recording
                micIcon.classList.remove("fa-microphone-slash");
                micIcon.classList.add("fa-microphone")
                searchFormInput.focus();
                console.log("Speech recognition is not active.")
                //STOP THE TIMER (NEEDS CODE HERE)
            }
            const textResults = document.querySelector("#textresults")
            const viewResults = document.querySelector("#viewresults")
            const title = document.querySelector("#title")
            const speechTitle = document.querySelector("#speechtitle")
            const textArea = document.querySelector("#textarea")
            const save = document.querySelector("#save")

            recognition.onresult = function (event) {
                const currentResultIndex = event.resultIndex
                console.log(event.resultIndex) //this returned 0 
                
                const transcript = event.results[currentResultIndex][0].transcript;
                console.log(transcript)
                
                textArea.innerHTML = transcript; //returns transcript of speech
                
                save.addEventListener("click", function () { //saving
                    console.log(textArea, "textArea");  //returns transcription
                    //this needs to save textArea info to database
                })
                
                viewResults.addEventListener("click", function () {
                    
                   speechTitle.innerHTML = title.value
                    const grabText = transcript.match(/David/g)
                    console.log(grabText)
                    if (grabText[0] === "David") {
                        const counter = grabText.length
                         
                        textResults.innerHTML = `You said ${grabText[0]} ${counter} times! Let's work on that a bit more shall we?`
                    }
                    
                })

            }
        }
    }

    return (
        <div>

            {/* <input id="keyword" type="text" placeholder="Listen for? (Press 'Enter')"/> HOW TO GET THE LISTEN FOR TO WORK -- DISCUSS WITH TEAM*/}
            <p>Click the microphone to start. When you are finished, click the microphone again.</p>
            
                <input id="title" type="text" className="form-control" placeholder="Name your speech..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                <div className="voiceContainer container shadow p-3 mb-5">
                    <div className="row">
                        <div className="col-4 offset-4">
                            <form method="get" id="searchForm" target="_blank">
                                <input type="hidden" autoComplete="off" autoFocus />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="vision">Timer: <br />
                    <label id="minutes">00</label>:<label id="seconds">00</label>
                </div>

                <div className="voiceContainer container">
                    <div className="mb-3"></div>
                    <textarea name="hide" style={{ display: 'none' }} className="form-control is-invalid" id="textarea" placeholder="Your message will appear here" required></textarea>
                    <br />

                <button type="button" className="btn btn-danger savers" id="save">Save Recording</button>
                <br></br>
                <br></br>
                <button id="viewresults" type="button" className="btn btn-info">View Results</button>
                <p id="speechtitle">Title</p>
                <p id="textresults">Results</p>
                    <br /> <br /><br />

                    <button type="button" className="btn btn-info" onClick={relocation} id="results">View Speches</button>
                </div>

                <div className="invalid-feedback"> Press the microphone to begin.</div>
            </div>

)
}

export default Speeches;
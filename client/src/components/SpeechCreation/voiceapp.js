import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition"


function Speeches() {
    const script=document.createElement("script");
    script.src = "./Voice.js"

    return (

        <div className="container shadow p-3 mb-5 bg-white rounded">

                <div className="col-4 offset-4">
                    <form action="https://www.google.com/search" method="get" id="search-form" target="_blank">
                        <input type="text" placeholder="Search Google" autoComplete="off" autoFocus />
                    </form>
                </div>
    
            <div className="container">
                
            <br></br> Press Start and begin speaking! <br></br>
=======
import { useEffect } from 'react';

function Speeches() {

    function relocation() {
        window.location.href="../Pages/ViewSpeeches.js";
    } 

    useEffect(() => {
        voiceFunctionality();
    });

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
                console.log("Speech recognition active.")
            }
            
            recognition.onend = function endSpeechRecognition() { //ending recording
                micIcon.classList.remove("fa-microphone-slash");
                micIcon.classList.add("fa-microphone")
                searchFormInput.focus();
                console.log("Speech recognition is not active.")
            }
        
            recognition.onresult = function (event) {
                const currentResultIndex = event.resultIndex
                console.log(event.resultIndex) //this returned 0 
                const textArea = document.querySelector("#textarea")
                const textAreaTwo = document.querySelector("#textareatwo")
                const save = document.querySelector("#save")
                const textResults = document.querySelector("#textresults")
                const results = document.querySelector("#results")
        
                const transcript = event.results[currentResultIndex][0].transcript;
                searchFormInput.value = transcript;
                textArea.innerHTML = transcript;
                console.log(transcript, "TRANSCRIPT") //this returns the transcript of the speech
        
                save.addEventListener("click", function () { //saving
                    textAreaTwo.innerHTML = textArea.innerHTML
                })
        
                results.addEventListener("click", function () {
                    const resultsText = textArea.innerHTML
                    const grabText = resultsText.match(/David/g)
                    console.log(grabText)
                    if (grabText[0] === "David") {
                        const counter = grabText.length
                         textResults.innerHTML = `You said ${grabText[0]} ${counter} times! Let's work on that a bit more shall we?`
                    }
                })
    
                if (transcript.toLowerCase().trim() === "stop recording") {
                    recognition.stop()
                }
                else if (!searchFormInput.value) {
                    searchFormInput.value = transcript;
                }
                else {
                    if (transcript.toLowerCase().trim() === "go") {
                        const newResult = event.results[currentResultIndex - 1][0].transcript
                        console.log(newResult)
                        searchFormInput.value = newResult
                        searchForm.submit();
                    }
                    else if (transcript.toLowerCase().trim() === "reset input") {
                        searchFormInput.value = ""
                        textArea.innerHTML = ""
                    }
                    else {
                        searchFormInput.value = transcript;
                    }
                }
            }
        }  
    }

    return (
        <div>
        
            <div className="voiceContainer container shadow p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-4 offset-4">
                        <form action="https://www.google.com/search" method="get" id="searchForm" target="_blank">
                            <input type="text" name="q" placeholder="Search Google" autoComplete="off" autoFocus />
                        </form>
                    </div>
                </div>
            </div>

            <div className="voiceContainer container">
                <div className="mb-3">
                    <input id="keyword" type="text" placeholder="Listen for? (Press 'Enter')"/>
                </div> <br/><br/>
>>>>>>> fedaa4c42a06426d62a89471f1e935cc8edf0cc0

                <label htmlFor="validationTextarea">Transcription area</label>
                    <textarea className="form-control is-invalid" id="textarea" placeholder="Your message will appear here" required></textarea>
                <br/>
    
                <button type="button" className="btn btn-danger savers" id="save">Save Recording</button>
                    <br/> <br/><br/>
            
                <button type="button" className="btn btn-info" onClick={relocation} id="results">View Results</button>
            </div>

            <div className="invalid-feedback"> Press the microphone to begin.</div>
</div>

)
}

export default Speeches;
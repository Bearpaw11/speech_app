import React from "react";
import { useEffect, useState } from 'react';
import API from '../../utils/API'
import Timer from '../Timer/Timer'
import { useHistory } from "react-router-dom"
import Accordion from "./accordion.js";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function Speeches(props) {
    let history = useHistory();

    function relocation() {
        history.push("/members");
    }

    // const [isOn, setIsOn] = useState()
    // function startTimer() {
        //     setIsOn(true)
        // }
        
        
    const [recognition, setRecognition] = useState(false);
    
    const voiceFunctionality = () => {
        const searchForm = document.querySelector("#searchForm");
        const searchFormInput = searchForm.querySelector("input");

        if (SpeechRecognition) {

            console.log("Your Browser supports speech Recognition");

            const recognition = new SpeechRecognition();
            
            recognition.continuous = true;
            const textResultsPersonal = document.querySelector("#textResultsPersonal");
            const textResults = document.querySelector("#textresults");
            const viewResults = document.querySelector("#viewresults");
            const title = document.querySelector("#title");
            const speechTitle = document.querySelector("#speechtitle");
            const textArea = document.querySelector("#textarea");
            const save = document.querySelector("#save");
            const time = document.querySelector("#time");
            const timeresult = document.getElementById("timeresult");
            
       
            recognition.onstart = function startSpeechRecogniton() {
                //beginning recording
                console.log("Speech recognition active.");
            }

            recognition.onend = function endSpeechRecognition() { //ending recording
  
                searchFormInput.focus();
                console.log("Speech recognition is not active.");
            }
            

            recognition.onresult = function (event) {
                const currentResultIndex = event.resultIndex;
                
                const transcript = event.results[currentResultIndex][0].transcript;

                console.log(transcript);
             
                textArea.innerHTML = transcript; //returns transcript of speech
                
                save.addEventListener("click", function (event) {
                    event.preventDefault();
                    
                    API.saveSpeech({
                        speechTitle: title.value,
                        length: time.innerHTML,
                        analytics: textResults.innerHTML + textResultsPersonal.innerHTML,
                        UserId: props.userId
                    }).then(function (data) {
                        console.log(data);
                    }).catch((err) => console.log(err))
                })
                
                viewResults.addEventListener("click", function () {
                    speechTitle.innerHTML = title.value;
                    console.log(transcript);
                    let words = transcript.split(" ");
                    console.log(words) //console logs words said
                    let textObj = {
                        "like": 0,
                        "and": 0,
                        "so": 0,
                        "sorry": 0,
                        "right": 0
                    }
                    
                    let textObjPersonal = {};

                    for (let i = 0; i < words.length; i++) {
                        if (textObj[words[i]] !== undefined) {
                            //  console.log("----", words[i], textObj[words[i]])
                            textObj[words[i]]++;
                        } else if (textObjPersonal[words[i]] !== undefined) {
                            textObjPersonal[words[i]]++;
                        } else {
                            textObjPersonal[words[i]] = 1;
                        }
                    }

                    let textRegular = "";
                    let counter = 0;

                    for (let key in textObj) {
                        console.log(key, ": ", textObj[key]);
                        if (textObj[key] > 0) {
                            textRegular += `You said ${key} ${textObj[key]} times! `
                            counter ++;
                        }
                    }
                            if (counter === 0) {
                                textRegular = `Congratulations! You said none of the filler words.`
                            }

                    textResults.innerHTML = textRegular;

                    let textPersonal = "";

                    for (let key in textObjPersonal) {
                        if (textObjPersonal[key] > 3) {
                            console.log(key, ": ", textObjPersonal[key]);
                            textPersonal += `You said ${key} ${textObjPersonal[key]} times! `
                        }
                    }

                    textResultsPersonal.innerHTML = textPersonal;

                    timeresult.innerHTML = `Speech Time:${time.innerHTML}`;
                })
            }
            setRecognition(recognition);
        }
    }
    
    useEffect(() => { 
        voiceFunctionality();
    },[]);

    return (
        <div id="recordingsPage">
            <p>According to research conducted, the following 5 words are the most common fillers used: 
            "like", "and", "so", "sorry", "right". When you finish recording, save your speech, and click 'View Results', you will be able to view how many times you said these 5 filler words, along with any other word you said 4+ times, and how long your speech was. </p>            <br />
           
            <div className="speechTitler">
                <input id="title" type="text" className="form-control speechTitler" placeholder="Name your speech..."/>
            </div>
           
           <div className="voiceContainer">
                <div className="row">
                    <div className="col-4 offset-4">
                        <form method="get" id="searchForm" target="_blank">
                            <input type="hidden" autoComplete="off" autoFocus />
                        </form>
                    </div>
                </div>
            </div>

            <div className="vision"> 
                <Timer recognition={recognition}/>
            </div>

            <div className="voiceContainer">
                <div className="mb-3"></div>
                    <textarea name="hide" style={{ display: 'none' }} className="form-control is-invalid" id="textarea" placeholder="Your message will appear here" required></textarea><br />


                    <Accordion /><br /> 
                
                    <button type="button" className="btn btn-info" onClick={relocation} id="results">View Speeches</button>
                </div>
            </div>
    )
}

export default Speeches;
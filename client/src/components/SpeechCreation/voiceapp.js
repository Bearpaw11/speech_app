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

    const [users, setUsers] = useState({})

    const verify = () => {
        API.verifyLogin().then(user => {
            if (user.data) {
                setUsers({ loggedIn: true, ready: true, userName: user.data.username, userId: user.data.id });
                
            } else {
                setUsers({ ready: true });
            }
        })
    } 

    const [recognition, setRecognition] = useState(false);
    
    const voiceFunctionality = () => {
        const searchForm = document.querySelector("#searchForm");
        const searchFormInput = searchForm.querySelector("input");

        if (SpeechRecognition) {

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
            const timeLength = document.querySelector(".none")
            const wpmValue = document.querySelector("#wpm")
       
            recognition.onstart = function startSpeechRecogniton() {
                empty()
                console.log("Speech recognition active.");
            }

            // function wpm(){
            //     let seconds = timeLength.value / 1000
            //     let totalWords = 
            // }

            recognition.onend = function endSpeechRecognition() { //ending recording
                searchFormInput.focus();
                console.log("Speech recognition is not active.");
            }
            

            function empty() {
                transcript.length = 0;
            }

            
            let transcript = []
            recognition.onresult = function (event) {
                console.log(event)
                const currentResultIndex = event.resultIndex;
                if(event){
                    if(event.results[currentResultIndex][0]) {
                    let transcript1 = event.results[currentResultIndex][0].transcript;
                        if (transcript1[0] === " ") {
                        transcript1= transcript1.substring(1);
                        }                    
                    console.log(transcript1)
                    transcript.push(transcript1)
                        }
                   }
                   console.log(transcript)
                textArea.innerHTML = transcript; //returns transcript of speech
                
                
                
                save.addEventListener("click", function (event) {
                    event.preventDefault();
                    console.log(users)

                    if (users.userId) {
                    alert("Your Speech has been saved. Click view speeches to see all your saved speeches")
                    
                    API.saveSpeech({
                        speechTitle: title.value,
                        length: time.innerHTML,
                        analytics: textResults.innerHTML + textResultsPersonal.innerHTML,
                        UserId: users.userId,
                        wpm: wpmValue.innerHTML
                        // UserId: props.userId
                    }).then(function (data) {
                        console.log(data);
                    }).catch((err) => console.log(err))
                }})
                
                viewResults.addEventListener("click", function () {
                    speechTitle.innerHTML = title.value;
                    let words = transcript.join(' ').split(" ");
                    console.log(words) //console logs words said
                    let seconds = parseInt(timeLength.innerHTML) / 1000
                    let wpm = parseInt((words.length / seconds) * 60)
                    wpmValue.innerHTML= 'Words per minute: ' + wpm
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
                        if (textObj[key] > 0) {
                            textRegular += `You said "${key}" ${textObj[key]} time(s). `
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
                            textPersonal += `You said "${key}" ${textObjPersonal[key]} times. `
                        }
                    }

                    textResultsPersonal.innerHTML = textPersonal;
                    timeresult.innerHTML = `Speech Time: ${time.innerHTML}`;
                })
            
            }
            setRecognition(recognition);
        }
    }
    
    useEffect(() => { 
        verify()
    }, []);
    
    useEffect(() => {
        voiceFunctionality();
    }, [users])

    return (
        <div>
            <br/>
            <p className="cardForRecordings">According to research conducted, the following 5 words are the most common fillers used in a speech: "like", "and", "so", "sorry", "right". Additionally, we found that successful speakers will speak between 125-150 words per minute.
            <br></br>
            <br></br>
            Our app analyzes how many times you say these common filler words, along with any word spoken more than 4 times. We will also show you how long your speech was and how fast you were speaking (wpm). Good luck and have fun!</p>
            <br/>
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

            <div className="vision cardForRecordings timerCenter"> 
                <Timer recognition={recognition}/>
            </div>

            <div className="voiceContainer cardForRecordings">
                <div className="mb-3"></div>
                    <textarea name="hide" style={{ display: 'none' }} className="form-control is-invalid" id="textarea" placeholder="Your message will appear here" required></textarea>

                    <Accordion/><br /> 
                    
                    <button type="button" className="btn btn-success" onClick={relocation} id="results">View Speeches</button>
            </div>
        </div>
    )
}

export default Speeches;

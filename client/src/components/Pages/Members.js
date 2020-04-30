import React, { Component } from "react";
import API from "../../utils/API"
import { Redirect } from "react-router-dom";
import Recordings from "../SpeechCreation/membersInfo.js";

class Members extends Component { //NEED ARROW FUNCTIONS WITHIN CLASS COMPONENT
   
    state = {
        loggedIn : false,
        ready: false,
        userName: [],
        speech: []
    }
        
    

    componentDidMount() { 
        this.verify()
    }

    relocation = () => {
        this.props.history.push("/Recordings");
    }
    relocationSignup = () => {
        window.location.href = "./Signup";
    }

    verify = () => {
        API.verifyLogin().then(user => {
            console.log("--->user data>", user)
            
            if(user.data){
                console.log("change state")
                this.setState({loggedIn:true, ready:true, userName: user.data.username, speech: user.data.speech})
            } else {
                this.setState({ready:true})
            }
        })
    } 

    getSpeech = () => {
       let id = this.state.userId

        console.log(id)
        API.getSpeech({
            UserId: id
        }).then(id => {
           console.log(id)
       })
   }


   
    render() {
        console.log(this.state.loggedIn, "USERDATA") //logs True
        //this.state.speech should console.log the speech
        // console.log("value of the state: ", this.state.loggedIn)
        // if(!this.state.ready){
        //     return <div/>
        // } else {
        //     if(this.state.loggedIn){
        //         console.log("state true")
        //     } else {
        //         console.log("state false")
        //         return <Redirect to="/Signup"/>
        //     }

if (this.state.loggedIn) {
    return (
        <div className="containerDiv">
            <p className="userWelcome">Welcome, {this.state.userName}!</p>
                <div>
                    <h5 className="recordingListTitle">Past Recordings:</h5>

                        <div className="recordingList">

                            {this.state.speech.map((record) => (
                                <Recordings speechTitle={record.speechTitle} 
                                            analytics={record.analytics}
                                            length={record.length} 
                                            id={record.id}/>
                            )
                            )}
                        </div>

                    <button type="button" onClick={this.relocation}>Create New Speech</button>
                    
                </div>
        </div>
    )}
    

else {
    return ( 
        <div>
            <p className="userWelcome">Please signup!</p>
                <div>
                    <button type="button" onClick={this.relocationSignup}>Signup</button>
                </div>
        </div>
    )
}
}}
// }

export default Members;
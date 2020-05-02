import React, { Component } from "react";
import API from "../../utils/API"
import { Redirect } from "react-router-dom";
import Recordings from "../SpeechCreation/membersInfo.js";

class Members extends Component { //NEED ARROW FUNCTIONS WITHIN CLASS COMPONENT
   
    state = {
        loggedIn : false,
        ready: false,
        userName: [],
        speech: [],
    }
        
    componentDidMount() { 
        this.verify()
        this.getSpeech()
    }

    relocation = () => {
        this.props.history.push("/Recordings");
    }
    relocationSignup = () => {
        this.props.history.push("/SignUp");
    }

    verify = () => {
        API.verifyLogin().then(user => {
            console.log("--->user data>", user)
            if(user.data){
                console.log("change state")
                this.setState({loggedIn:true, ready:true, userName: user.data.username, userId: user.data.id})
            } else {
                this.setState({ready:true})
            }
        })
    } 

    getSpeech = () => {
       let id = this.state.userId;
        console.log(this.props.userId, id, "id?") //returns null + []
       
        API.getSpeech(
            this.props.userId
        ).then(id => {
            this.setState({ speech: id.data }) //EMPTY ARRAY
       })
   }

   deleteSpeech = () => {
    let id = this.state.userId;
     console.log(this.props.userId, id, "id?") //returns null + []
    
     API.deleteSpeech(
         this.props.userId
     ).then(id => {
         this.setState({ speech: id.data }) //EMPTY ARRAY
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
        <div className="containerDiv vision">
            <h4 className="userWelcome">Welcome, {this.state.userName}!</h4><br/>
                <div>
                    <h5 className="recordingListTitle">Past Recordings:</h5>
                        <div className="recordingList">
                      
                    {this.state.speech &&
                        this.state.speech.map((record) => (
                                <Recordings speechTitle={record.speechTitle} 
                                            // userid={this.props.userId}
                                            analytics={record.analytics}
                                            length={record.length} 
                                            id={record.id}/>
                                )
                            )}
                        </div>

                    
                </div>
                    <button type="button" onClick={this.relocation}>Create New Speech</button>
                  </div>  
        
    )}
    

else {
    return ( 
        <div className="vision">
            <p className="userWelcome">Please signup!</p>
                <div>
                    <button type="button" onClick={this.relocationSignup}>Signup</button>
                <br/><br/>
                </div>
        </div>
    )
}
}}
// }

export default Members;
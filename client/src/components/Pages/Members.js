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
                this.setState({loggedIn:true, ready:true, userName: user.data.username, speech: user.data.speech})
            } else {
                this.setState({ready:true})
            }
        })
    } 

    getSpeech = () => {
       let id = this.state.userId
        console.log(this.props.userId)
       
        API.getSpeech(
            this.props.userId
        ).then(id => {
            this.setState({ speech: id.data })
            // console.log(id.data)
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
<<<<<<< HEAD
                      
                    {this.state.speech &&
                        this.state.speech.map((record) => (
=======
                            {this.state.speech.map((record) => (
>>>>>>> 9acd6f7db4d174ca508f6f43d9ba9f8077b4330f
                                <Recordings speechTitle={record.speechTitle} 
                                            id={this.props.userId}
                                            analytics={record.analytics}
                                            length={record.length} 
                                            id={record.id}/>
                                )
                            )}
<<<<<<< HEAD
                        </div>

=======
                        </div><br/>
                        
                    <button type="button" onClick={this.relocation}>Create New Speech</button>
>>>>>>> 9acd6f7db4d174ca508f6f43d9ba9f8077b4330f
                    
                </div>
                    <button type="button" onClick={this.relocation}>Create New Speech</button>
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
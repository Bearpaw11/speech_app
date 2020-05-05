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
        userId:null
        
    }
        
    componentDidMount() { 
        console.log("MOUNT", this.state)
     this.verify()
        //this.getSpeech()
    }
 

    relocation = () => {
        console.log(this.props.history)
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
        this.getSpeech()
        })
    } 

    getSpeech = () => {
        console.log("get", this.state.userId, this.props.userId)
       let id = this.state.userId;
        console.log(this.state.userId, id, "id?") //returns null + []
       if(this.state.userId){
        API.getSpeech(
            this.state.userId
        ).then(result => {
            this.setState({ speech: result.data,loggedIn:true }) //EMPTY ARRAY
            // console.log(id.data[0].id, "id?") //returns null + []
       })
    }
   }

 delete = (id) =>{

    console.log("delete this id: ", id)

         API.deleteSpeech(
            id
         ).then(id => {
         this.getSpeech()
             
        })
 }


    render() {
        console.log(this.state, "USERDATA") //logs True
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
                                <Recordings 
                                key={record.id}
                                speechTitle={record.speechTitle} 
                                delete={this.delete}
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
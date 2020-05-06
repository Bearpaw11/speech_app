import React, { Component } from "react";
import API from "../../utils/API"
import Recordings from "../SpeechCreation/membersInfo.js";

class Members extends Component { //NEED ARROW FUNCTIONS WITHIN CLASS COMPONENT
   
    state = {
        loggedIn : false,
        ready: false,
        userName: [],
        speech: [],
        userId: null
    }
        
    componentDidMount() { 
        console.log("MOUNT", this.state);
        this.verify();
    }
 
    relocation = () => {
        console.log(this.props.history);
        this.props.history.push("/Recordings");
    }

    relocationSignup = () => {
        this.props.history.push("/SignUp");
    }

    verify = () => {
        API.verifyLogin().then(user => {
            console.log("--->user data>", user);

            if (user.data){
                console.log("change state");
                this.setState({loggedIn:true, ready:true, userName: user.data.username, userId: user.data.id});
            } else {
                this.setState({ready:true});
            }

            this.getSpeech();
        })
    } 

        getSpeech = () => {
            console.log("get", this.state.userId, this.props.userId);
       
            let id = this.state.userId;
            
            console.log(this.state.userId, id, "id?");
       
            if (this.state.userId){
                API.getSpeech(
                    this.state.userId
                ).then(result => {
                    this.setState({ speech: result.data,loggedIn:true });
                })
            }
        }

        delete = (id) =>{
            console.log("delete this id: ", id);

            API.deleteSpeech(
                id
            ).then(id => {
                this.getSpeech();
            })
        }


    render() {
        console.log(this.state, "USERDATA") //logs True
      
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
                    <button type="button" className="btn" id="btn-aquaColor" onClick={this.relocation}>Create New Speech</button>
                </div>  
            )
        } else {
            return ( 
                <div className="vision">
                    <p className="userWelcome">Please sign up in order to use the app.</p>
                    
                    <div>
                        <button type="button" onClick={this.relocationSignup}>Signup</button><br/><br/>
                    </div>
                </div>
            )
        }
    }
}

export default Members;
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
        this.verify();
    }
 
    relocation = () => {
        this.props.history.push("/Recordings");
    }

    relocationSignup = () => {
        this.props.history.push("/SignUp");
    }

    verify = () => {
        API.verifyLogin().then(user => {
            if (user.data){
                this.setState({loggedIn:true, ready:true, userName: user.data.username, userId: user.data.id});
            } else {
                this.setState({ready:true});
            }

            this.getSpeech();
        })
    } 

        getSpeech = () => {       
            let id = this.state.userId;
                   
            if (this.state.userId){
                API.getSpeech(
                    this.state.userId
                ).then(result => {
                    this.setState({ speech: result.data,loggedIn:true });
                })
            }
        }

        delete = (id) =>{
            API.deleteSpeech(
                id
            ).then(id => {
                this.getSpeech();
            })
        }


    render() {
      
        if (this.state.loggedIn) {
            return (
                <div className="containerDiv vision recDiv">
                    <h4 className="userWelcome whiteText">Welcome, {this.state.userName}!</h4><br/>
                <div>
                    
                    <h5 className="recordingListTitle whiteText">Past Recordings:</h5>
                        <div className="recordingList">

                            {this.state.speech &&
                                this.state.speech.map((record) => (
                                        <Recordings 
                                        key={record.id}
                                        speechTitle={record.speechTitle} 
                                        delete={this.delete}
                                        wpm= {record.wpm}
                                        analytics={record.analytics}
                                        length={record.length} 
                                        id={record.id}/>
                                )
                            )}
                        </div>
                </div>
                    <button type="button" className="btn btn-success" id="speecherBtn" onClick={this.relocation}>Create New Speech</button>
                </div>  
            )
        } else {
            return ( 
                <div className="whiteText vision">
                    <br/>
                    <p className="userWelcome">Please create an account to use the app.</p>

                    
                    <div>
                        <button type="button" className="btn btn-success" onClick={this.relocationSignup}>Sign Up</button><br/><br/>
                    </div>
                </div>
            )
        }
    }
}

export default Members;
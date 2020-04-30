import React, { Component } from "react";
import API from "../../utils/API"
import { Redirect } from "react-router-dom";

class Members extends Component{ //NEED ARROW FUNCTIONS WITHIN CLASS COMPONENT
    state = {
        loggedIn : false,
        ready: false,
        userId: ""
    }
        
    

    componentDidMount() { 
        this.verify()
       
        //TO MAKE THIS FASTER, WE CAN CALL THE DATABASE ONCE AND ANYTIME THERE'S NEW RECORDINGS, ADD IT TO OUR STATE ARRAY INSTEAD OF MAKING AN API CALL TO GET THE LATEST
    }

    relocation = () => {
        this.props.history.push("/Recordings");
    }
    relocationSignup = () => {
        window.location.href = "./Signup";
    }

    verify = () =>{
        API.verifyLogin().then(user => {
            console.log("--->user data>", user.data)
            
            if(user.data){
                
                this.setState({loggedIn:true, ready:true, userId: user.data.id})
            } else{
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


   
    render(){
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
      
if(this.state.loggedIn){
    return (
        <div className="containerDiv">
            <p className="userWelcome">Welcome, username!</p>
                <div>
                    <p className="recordingListTitle">Past Recordings:</p>

                    <ul className="recordingList">
                        <li className="recordingListItem">
                            {/* MAP THROUGH ARRAY OF RECORDINGS*/}
                            {/* HAVE AUTOMATIC GENERATION OF LISTS & ANALYTICS HERE */}
                        </li>
                    </ul>
                    <button type="button" onClick={this.getSpeech}>View past Recordings</button>
                    <button type="button" onClick={this.relocation}>Create New Speech</button>
                </div>
        </div>
    )}
    

else{
    return ( <div>
        <p className="userWelcome">Please signup, username!</p>
            <div>
              
            
                <button type="button" onClick={this.relocationSignup}>Signup</button>
            </div>
    </div>)
}
}}
// }

export default Members;
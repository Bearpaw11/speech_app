import React, { Component } from "react";
import API from "../../utils/API"
import {Redirect} from "react-router-dom"


class Members extends Component{
    state={
        loggedIn : false,
        ready:false
    }

    componentDidMount(){

     this.verify()
    
    }

    verify = ()=>{
        API.verifyLogin().then(user=>{
            console.log("--->user data>", user.data)
            
        if(user.data){
            console.log("change state")
            this.setState({loggedIn:true, ready:true})
        }
        else{
            this.setState({ready:true})
        }
        
        })

    } 



    render(){
        console.log("value of the state: ", this.state.loggedIn)
        if(!this.state.ready){
            return <div/>
        }
        else{
        if(this.state.loggedIn){
            console.log("state true")

    return (
      <div>
            
            <p>
                MEMBERS
            </p>
      </div>
    )}
    else{
        console.log("state false")
        return <Redirect to={"/Signup"}/>
    }
}
}
}

export default Members;
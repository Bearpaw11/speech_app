import React, { Component } from "react";
// import '../../../src/components/Layouts/contact.css';
import axios from "axios";
import { Redirect} from "react-router-dom"
import '../../../src/components/Layouts/ContactCSS/contact.css';



class Contact extends Component {
state={
first_name: "",
last_name: "",
email: "",
message: "",
send:false

}

 handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(this.state)
  //this.sendEmail()
  //this.sendEmailContact()
 /// we will send the email
 let internalEmail={
  from: `Speech Therapy`,
  to: `speechtherapyapp2020@gmail.com`,
  subject: `Message from Contact page`,
  text: `${this.state.message} from ${this.state.first_name} ${this.state.last_name}`
   }
  
  let funSend  = this.sendCustomerEmail
 axios.post("/api/sendemail", internalEmail).then(
   function(data){
     console.log(data)
 
    funSend()
    
    })
 
  }

 handleInputChange = (event) => {
  const { name, value } = event.target;
  console.log(name, value)
  this.setState({ [name]: value })
};

sendCustomerEmail = () =>{
  let customerEmail={
    from: `speechterapyapp2020@gmail.com`,
    to:  `${this.state.email}`,
    subject: `Message from Speech Therapy Team`,
    text: `Thank you for your message. A member from our team will contact you shortly.`
 }

axios.post("/api/sendemail", customerEmail).then(
data => {
  console.log("---back 2nd:", data)
alert("Message Has been sent")
this.setState({send:true})


})
}
renderRedirect = () =>{
  if (this.state.send){
return <Redirect to ="/" />
  }
}




  render(){
    return (
      <div>
            
              <div className="container">
              <div className="row header">
                <h1 id="contactUs">CONTACT US</h1>
              </div>
              <div className="row body">
                <form action="#">
                  <ul>
                    
                    <li>
                      <p className="left">
                        <label for="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="John" onChange ={this.handleInputChange} value={this.state.first_name}/>
                      </p>
                      <p className="left">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="Smith" onChange ={this.handleInputChange} value={this.state.last_name}/>      
                      </p>
                    </li>
                    
                    <li>
                      <p>
                        <label htmlFor="email">Email <span className="req">*</span></label>
                        <input type="email" name="email" placeholder="john.smith@gmail.com" onChange ={this.handleInputChange} value={this.state.email}/>
                      </p>
                    </li>        
                    <li><div className="divider"></div></li>
                    <li>
                      <label htmlFor="message">Message</label>
                      <textarea cols="46" rows="3" name="message" onChange ={this.handleInputChange } value={this.state.message}></textarea>
                    </li>
                    
                    <li>
                      <input className="btn btn-submit" type="submit" value="Submit" onClick ={this.handleFormSubmit} />
                    </li>
                    
                  </ul>
                </form>  
              </div>
            </div>

            {this.renderRedirect()}
            
      </div>
    )
}
}
export default Contact;

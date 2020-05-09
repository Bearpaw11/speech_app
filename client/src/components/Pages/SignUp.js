import React, {useState} from "react";
import API from '../../utils/API'
import { Input, FormBtn } from "../Form";
import signupgraphic from "../Layouts/ContactCSS/signupwave.png"


function SignUp() {

  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: ""
  })

    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject.username && formObject.email && formObject.password) {
            alert('Thank you for signing up! Please log in to view your account and create a speech.');
            
            API.signUp({
                username: formObject.username,
                email: formObject.email,
                password: formObject.password
            })
            .then(() => setFormObject({
                username: "",
                email: "",
                password: ""
            }))
            .catch(err => console.log(err));
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    return (   
        <div> 
            <div className="container"><br/>
                <div className="row header signUpHeader">
                <img className="signupHeader" src={signupgraphic} alt="Sign Up"></img>
                    
                </div>

                    <form className="vision">
                        <Input
                            className="vision"
                            onChange={handleInputChange}
                            name="username"
                            placeholder="Username"
                            value={formObject.username} 
                        />
                    
                        <Input
                            className="vision"
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email"
                            value={formObject.email} 
                        />
                    
                        <Input
                            className="vision"
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password"
                            value={formObject.password} 
                        />
                    
                    </form>
                    
                    <div className="row">
                        <div className="signUpCenter">
                            <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
                        </div>
                    </div>
                    
                </div>
            </div>
     
      )
    }

      export default SignUp;
import React, { useState } from "react";
import API from '../../../utils/API'
import { Input, FormBtn } from "../../Form";
import { useHistory } from "react-router-dom";
import "./modal.css";

function LoginModal(props) {
    
    let history = useHistory();
    
    const [formObject, setFormObject] = useState({
        email: "",
        password: ""
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
           
            API.login({
                    email: formObject.email,
                    password: formObject.password
                })
                .then((userInfo) => {
                    console.log("user info: ", userInfo.data)
                    props.setUserId(userInfo.data.id)
                    window.localStorage.setItem('userId', userInfo.data.id)
                    // go to the home
                    setFormObject({
                        email: "",
                        password: ""
                    })

                    if (API.login) {
                    console.log("working")
                    props.onHide()
                    history.push("/members");
                    }
                    // if(!API.login) {
                    //     alert("Please enter correct credentials")
                    // }
                }).catch(err => console.log(err), alert("Please enter correct credentials"));
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value })
    };

    return ( 
        <div>
            <form>
                <h1 className="vision"> Log in! 
                    <span aria-label="microphone" role="img">🎤</span>
                </h1><br/>
                    
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email"
                        value={formObject.email} 
                    />
                    
                    <Input
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formObject.password} 
                    />
                        
                <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
            </form>
        </div>
    )
}

export default LoginModal;
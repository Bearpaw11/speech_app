import React, { useState } from "react";
import API from '../../../utils/API'
import { Input, FormBtn } from "../../Form";
import {Redirect} from "react-router-dom"


function LoginModal() {

    const [formObject, setFormObject] = useState({

        email: "",
        password: ""
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
            console.log(formObject)
            API.login({

                    email: formObject.email,
                    password: formObject.password
                })
                .then((userInfo) => {
                    console.log("user info: ", userInfo.data)
                    // go to the home
                    setFormObject({
                        email: "",
                        password: ""
                    })
                    return <Redirect to={"/members"}/>

                }).catch(err => console.log(err));
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value })
    };



    return ( 
        <div>
            <form>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email"
                        value={formObject.email} />
                    <Input
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password"
                        value={formObject.password} />
                        
                    <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
                </form>
        </div>
    )
}

export default LoginModal;
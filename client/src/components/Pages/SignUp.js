import React, {useState} from "react";
import API from '../../utils/API'
import { Input, FormBtn } from "../Form";

function SignUp() {


  

  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.email && formObject.password) {
      console.log(formObject)
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
            <div className="row">
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="username"
                        placeholder="Username"
                        value={formObject.username} />
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
      </div>
      )
    }

      export default SignUp;
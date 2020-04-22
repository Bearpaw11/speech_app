import React, {useEffect, useState} from "react";
import Header from '../components/Layouts/Header'
import NavBar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import API from '../utils/API'
import { Input, FormBtn } from "../components/Form";
// import "./Layouts/layouts.css";

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
        <NavBar />
        <Header />
        <br>
        </br>
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
            <FormBtn
            onClick={handleFormSubmit}
            />
        </form>
        </div>
      <Footer />
      </div>
      )
    }

      export default SignUp;
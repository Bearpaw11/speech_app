import React, {useEffect, useState} from "react";
import Header from '../components/Layouts/Header'
import NavBar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Api from '../utils/API'
import { Input, TextArea, FormBtn } from "../components/Form";
// import "./Layouts/layouts.css";

function SignUp() {


  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: ""
  })

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.username && formObject.email && formObject.password) {
  //     app.saveBook({
  //       username: formObject.username,
  //       email: formObject.email,
  //       password: formObject.pasword
  //     })
  //       .then(() => setFormObject({
  //         email: "",
  //         username: "",
  //         password: ""
  //       }))
  //       .catch(err => console.log(err));
  //   }
  // };

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
              value={formObject.username} />
            <Input
              onChange={handleInputChange}
            value={formObject.email} />
            <Input
              onChange={handleInputChange}
            value={formObject.password} />
          <FormBtn/>
        </form>
        </div>
      <Footer />
      </div>
      )
    }

      export default SignUp;
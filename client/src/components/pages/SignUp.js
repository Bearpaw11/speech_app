import React from "react";
import Header from '../Layouts/Header.js'
import NavBar from '../Layouts/Navbar.js'
import Footer from '../Layouts/Footer.js'
import "../Layouts/layouts.css";

function SignUp() {
    return (   
        <div>
        <NavBar />
        <Header />
        <div className="input-group input-group-lg"></div>
            <div className="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Username</span>
            </div>
        
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
    
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <Footer />
      </div>
      )
    }

      export default SignUp;
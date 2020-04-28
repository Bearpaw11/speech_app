import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar(props) {
  const location = useLocation();

  return (
 <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
  
        <a className="navbar-brand" href="#">Navigation</a>

         <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            
            <li className="nav-item active">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            </li>
      
            <li className="nav-item">
                <Link to="/About" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
            </li>

            <li className="nav-item">
                <Link to="/Contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Contact</Link>
            </li>

            <li className="nav-item">
                <Link to="/SignUp" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sign Up</Link>
            </li>

            <li className="nav-item">
                <Link to="/Recordings" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Recordings</Link>
            </li>

            <li className="nav-item">
                <Link to="/Members" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Members</Link>
            </li>

        <button onClick={props.showModal}>Log In</button>

        <button id="logOut">Log Out</button>
            </ul>

    </div>
</nav>
</div>
    
  )
}

export default NavBar;
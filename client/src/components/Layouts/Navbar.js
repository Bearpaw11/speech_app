import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar(props) {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
      <Link to="/About" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
      <Link to="/Contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Contact</Link>
      <Link to="/SignUp" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sign Up</Link>
      <button onClick={props.showModal} >Log In</button>
    </div>
  )
}

export default NavBar;
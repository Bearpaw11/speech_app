import React from "react";
import { Link, useLocation } from "react-router-dom";
import API from '../../../utils/API'
import './navbar.css';
import logo from './logorainbow.png';

function NavBar(props) {
  const location = useLocation();
    function logOut() {
        API.logOut().then((logout) => {
            console.log(logout)
            window.location.href = "/";
            alert("You've been logged out!")
        })
    }
  return (
    <div className="navi">
        <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="fas fa-bars fa-1x"></span>
            </button>
            <img className="navPic" src={logo} />
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-li">
                        <Link to="/" className={location.pathname === "/" ? "nav-links active" : "nav-links"}>Home</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/About" className={location.pathname === "/" ? "nav-links active" : "nav-links"}>About</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/Contact" className={location.pathname === "/" ? "nav-links active" : "nav-links"}>Contact</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/SignUp" className={location.pathname === "/" ? "nav-links active" : "nav-links"}>Sign Up</Link>
                    </li>
                    
                    {/* <li className="nav-li">
                        <Link to="/Recordings" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Recordings</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/Members" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Members</Link>
                    </li> */}
                    <li className="nav-links">
                        <a id="loginLink" onClick={props.showModal}>Log In</a>
                    </li>
                    <li className="nav-links">
                        <a id="logoutLink" onClick={logOut} >Log Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
export default NavBar;
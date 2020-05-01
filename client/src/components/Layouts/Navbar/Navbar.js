import React from "react";
import { Link, useLocation } from "react-router-dom";
import API from '../../../utils/API'
import './navbar.css';
import logo from '../colorwave.png';

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
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="navPic"></div>
            <img className="navPic" src={logo} />
                <ul className="navbar-nav">
                    <li className="nav-item">
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
                    {/* <li className="nav-item">
                        <Link to="/Recordings" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Recordings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Members" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Members</Link>
                    </li> */}
                    <li className="nav-item">
                        <a id="navlink" onClick={props.showModal}>Log In</a>
                    </li>
                    <li className="nav-item">
                        <a id="logOut" onClick={logOut} >Log Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
export default NavBar;
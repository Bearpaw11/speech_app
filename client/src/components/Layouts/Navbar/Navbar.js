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
<<<<<<< HEAD
=======
    
>>>>>>> 8a95d36f5f7bd383a08056cebec1c855bd3bc889
  return (
    <div className="navi">
        <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="fas fa-bars fa-1x"></span>
            </button>
<<<<<<< HEAD
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
=======
            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="navPic"></div>
                    <img className="navPic" src={logo} alt="logo" href="#"/>
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

                            <li className="nav-item">
                                <a id="navlink" onClick={props.showModal}>Log In</a>
                            </li>

                            <li className="nav-item">
                                <a id="logOut" onClick={logOut}>Log Out</a>
                            </li>
                        </ul>
                </div>
>>>>>>> 8a95d36f5f7bd383a08056cebec1c855bd3bc889
        </nav>
    </div>
  )
}
export default NavBar;
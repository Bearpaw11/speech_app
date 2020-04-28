import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar(props) {
  const location = useLocation();

  return (
    <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
      <Link to="/About" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
      <Link to="/Contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Contact</Link>
      <Link to="/SignUp" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sign Up</Link>
      {/* <Link to="/Recordings" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Recordings</Link>
      <Link to="/Members" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Members</Link> */}
      <button onClick={props.showModal} >Log In</button>
          </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
        
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        

    <span class="navbar-toggler-icon">
        
    </span>

</button>
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
      <Link to="/About" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
      <Link to="/Contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Contact</Link>
      <Link to="/SignUp" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sign Up</Link>
      {/* <Link to="/Recordings" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Recordings</Link>
      <Link to="/Members" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Members</Link> */}
      <button onClick={props.showModal} >Log In</button>
      </nav>

    </div>
  )
}

export default NavBar;
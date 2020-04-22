import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
// import Form from "./components/Form"
import AppModal from "./components/Layouts/Modal/Modal.js";
// import SignUp from './pages/SignUp';
import NavBar from "../src/components/Layouts/Navbar";

function App (props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
      };

      const hideModal = () => {
        setIsOpen(false);
      };

        return (
            <div>
                <Router>
                <NavBar showModal={showModal}/>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Signup" component={SignUp} />
                  
                {
                    isOpen && <AppModal isOpen={isOpen} hideModal={hideModal}/>
                }   
                
                {/* CONDITIONAL RENDERING: if the state of isOpen is true, then render AppModal component with the isOpen boolean value equal to the passed in isOpen, and the hideModal value equal to the passed in hideModal */}

                </Router>

            </div>
        );
}  

export default App;
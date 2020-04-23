import React from 'react';
import './App.css';
import About from './components/Pages/About';
import Home from './components/Pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import SignUp from "./components/Pages/SignUp";
import AppModal from "./components/Layouts/Modal/Modal.js";
import NavBar from "../src/components/Layouts/Navbar";
import Header from "../src/components/Layouts/Header";
import Footer from "../src/components/Layouts/Footer";
import CreateSpeech from "./components/Pages/CreateSpeech.js";

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
                <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Signup" component={SignUp} />
                    <Route path="/Recordings" component={CreateSpeech} />

                {
                    isOpen && <AppModal isOpen={isOpen} hideModal={hideModal}/>
                }   
                
                {/* CONDITIONAL RENDERING: if the state of isOpen is true, then render AppModal component with the isOpen boolean value equal to the passed in isOpen, and the hideModal value equal to the passed in hideModal */}
                </Router>
                <Footer/>
            </div>
        );
}  

export default App;
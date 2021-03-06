import React from 'react';
import './App.css';
import About from './components/Pages/About';
import Home from './components/Pages/Home.js';
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import SignUp from "./components/Pages/SignUp";
import Members from "./components/Pages/Members";
import AppModal from "./components/Layouts/Modal/Modal.js";
import NavBar from "../src/components/Layouts/Navbar/Navbar.js";
import Header from "../src/components/Layouts/Header/Header.js";
import Footer from "../src/components/Layouts/Footer";
import CreateSpeech from "./components/Pages/CreateSpeech.js";
//import API from "./utils/API"
import './components/Layouts/background.css';
import wavegraphic from "./components/Layouts/ContactCSS/soundwave.png"


function App(props) {

    console.log("app:", props);

    const [isOpen, setIsOpen] = React.useState(false);

    const [userId, setUserId] = React.useState(null);
    
    const [id, setId] = React.useState(null);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* <img className="soundwave" src={wavegraphic} alt="soundwave"></img> */}

            <NavBar showModal={showModal} />
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Signup" component={SignUp} />
            <Route exact path="/Recordings" render={(props) => <CreateSpeech userId={userId} />} />

            {/* <Route exact path="/Recordings" render={(props) => props.userid ? <CreateSpeech userId={userId}/> : <SignUp/>} /> */}
            {/* <Route exact path ="/members" render={(props) => props.userid ? <members /> : <SignUp/>} /> */}
            <Route exact path="/members" component={Members} />


            {
                isOpen && <AppModal setUserId={setUserId} isOpen={isOpen} hideModal={hideModal} />
            }

            {/* CONDITIONAL RENDERING: if the state of isOpen is true, then render AppModal component with the isOpen boolean value equal to the passed in isOpen, and the hideModal value equal to the passed in hideModal */}
            
            <Footer />

        </div>
    );

}


export default withRouter(App);
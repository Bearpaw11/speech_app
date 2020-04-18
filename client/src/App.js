import React from 'react';
import './App.css';
import About from './components/pages/About.js';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/pages/Contact.js";
import SignUp from "./components/pages/SignUp.js";
import Modal from "./components/Layouts/Modal.js";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Signup" component={SignUp} />
                    <Route path="/Login" component={Modal} />
                </Router>

                
            </div>
        );
    }
}  

export default App;
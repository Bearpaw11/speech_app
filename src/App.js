import React from 'react';
import './App.css';
import About from '.././src/pages/About.js';
import Home from '.././src/pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from ".././src/pages/Contact.js";
import Profile from ".././src/pages/Profile.js";
import Results from ".././src/pages/Results.js";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Profile" component={Profile} /> 
                    <Route exact path="/Results" component={Results} />
                </Router>
            </div>
        );
    }
}  

export default App;

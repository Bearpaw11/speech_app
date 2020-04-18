import React from 'react';
import './App.css';
import About from './components/pages/About.js';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/pages/Contact.js";
// import Profile from "./client/src/components/pages/Profile.js";
// import Results from "../client/src/components/pages/Results.js";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    {/* <Route exact path="/Profile" component={Profile} /> 
                    <Route exact path="/Results" component={Results} /> */}
                </Router>
            </div>
        );
    }
}  

export default App;
import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
// import Form from "./components/Form"
import Modal from "./components/Layouts/Modal";
// import SignUp from './pages/SignUp';

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
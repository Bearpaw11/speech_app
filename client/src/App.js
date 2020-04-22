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


function App () {
   
    const showModal = () => {
        setIsOpen(true);
      };

      const [isOpen, setIsOpen] = React.useState(false);
      const [title, setTitle] = React.useState("Transitioning...");
    
   
     
        return (
        
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Signup" component={SignUp} />
                    <Route path="/Login" showModal={showModal} component={AppModal}> 
                     </Route>
                </Router>

            </div>
        );
}  

export default App;
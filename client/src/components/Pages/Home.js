import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import App from "../Layouts/Modal/Modal.js";
import Carousel from "../Layouts/Carousel.js";
import Resources from "./Resources.js";
import wavegraphic from "../Layouts/ContactCSS/soundwave.png"
function Home() {
    return (
      <div className="containerDiv">
          {/* <img className="soundwave" src={wavegraphic} alt="soundwave"></img> */}
            <MDBCol>
                <MDBCard className="methods">
                    <MDBCardBody>
                        <h1 className="vision headerTitles">Why Speech Therapy?</h1>
                        <hr className="boldHR"></hr>
                            <MDBCardText className="vision">3 out of every 4 people have a fear of public 
                            speaking. This fear can significantly impact things such
                            as earning potential, ability to get promoted and 
                            even graduate college! What if you had access to a 
                            tool that could help you earn 10% more annually, 
                            get promoted faster, or even graduate college at 
                            the top of your class?
                            </MDBCardText>
                                
                            <MDBCardText className="vision">                
                            That's exactly what Speech 
                            Therapy will give you. You will unlock potential 
                            you never knew you had by using an intuitive 
                            application that will show you real time results
                            and provide instant feedback.
                            </MDBCardText>
                    </MDBCardBody>
                 </MDBCard>
                </MDBCol>
            <Carousel/>


            <p className="resourceText vision">Recommended Public Speaking Resources</p>
            
            <br/>
            <Resources />

        <App />
      </div>
    )
}
export default Home;
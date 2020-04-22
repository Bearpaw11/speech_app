import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Header from '../components/Layouts/Header.js'
import Footer from '../components/Layouts/Footer.js'
import Speeches from "../components/Speeches/index.js";

function Results() {
    return (
      <div>
            <Header />
                <MDBCol>
                    <MDBCard className="methods" style={{ width: "42rem"}}>
                        <MDBCardBody>
                            <MDBCardTitle className="vision">View Results and Past Speeches </MDBCardTitle>
                                <MDBCardText className="vision">
                                    
                                    <a href="#">Speech Title Here -- needs curly braces</a>
                                    <img src="../Pics/star.png"></img> 
                                    {/* Star needs to be rendered for each speech - prob make this a component */}
                                </MDBCardText>
                                
                                <Speeches />
                        </MDBCardBody>
                     </MDBCard>
                    </MDBCol>
            <Footer />
      </div>
    )
}
export default Results;
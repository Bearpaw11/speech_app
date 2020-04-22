import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Header from '../components/Layouts/Header.js'
import NavBar from '../components/Layouts/Navbar.js'
import Footer from '../components/Layouts/Footer.js'

function Home() {
    return (
      <div>
            <NavBar />
            <Header />
                <MDBCol>
                    <MDBCard className="methods" style={{ width: "42rem"}}>
                        <MDBCardBody>
                            <MDBCardTitle className="vision">Why Speech Therapy? </MDBCardTitle>
                                <MDBCardText className="vision">3 out of every 4 people have a fear of public 
                                speaking. This fear can significantly impact things such
                                as earning potential, ability to get promoted and 
                                even graduate college! What if you had access to a 
                                tool that could help you earn 10% more annually, 
                                get promoted faster, or even graduate college at 
                                the top of your class?</MDBCardText>
                                
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
                    {/* SIGN UP BUTTON W/SIGN UP FORM  */}
                    {/* IF A USER IS ON HOME PAGE + LOGGED IN, DON'T SEE SIGN UP BTN */}
            <Footer />
      </div>
    )
}
export default Home;
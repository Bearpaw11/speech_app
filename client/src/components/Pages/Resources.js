import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const Resources = () => {
  return (
    <MDBCardGroup className="text-center">
      <MDBCard>
        <MDBCardImage src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fiese%2Ffiles%2F2016%2F04%2Fmicrophone-704255_1280-1200x800.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle className="vision" tag="h5">Forbes</MDBCardTitle>
          <MDBBtn color="primary" size="md" href="https://www.forbes.com/sites/iese/2016/04/18/12-tips-for-public-speaking/#30997f433a18">
          Click to Read
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="https://publicrelationssydney.com.au/wp-content/uploads/2012/07/Microphone-at-conference.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle className="vision" tag="h5">Toastmasters</MDBCardTitle>
          <MDBBtn color="primary" href="https://www.toastmasters.org/resources/public-speaking-tips">
       Click to Read
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="https://warwickcareers.files.wordpress.com/2017/06/public-speaking-image.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle className="vision" tag="h5">Inc.</MDBCardTitle>
          <MDBBtn color="primary" size="md" href="https://www.inc.com/brent-gleeson/20-tips-for-mastering-art-of-public-speaking.html">
            Click to Read
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Resources;
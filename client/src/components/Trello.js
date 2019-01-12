import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Trello = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                  alt=""
                  className="img-fluid"
                /> 
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  Trello
                </h2>
                <p>
                  Check out our Trello page!
                </p>
                <MDBBtn className="btn-fb waves-light" color="indigo darken-4">
                  <MDBIcon icon="trello" className="" />
                  <a href="https://trello.com/b/pipJjSew/capstone-project">Trello</a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                Our team choose to use Trello as our choice of project planning software. We choose to use Trello to manage our web project for two reasons. It is free and helps keep us organized and focused. 
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Trello;
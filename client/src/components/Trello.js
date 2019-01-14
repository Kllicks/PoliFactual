import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

import Trellopic from '../styles/images/Trello.png';
import Styles from '../styles/Trello.css';

const Trello = () => {
  return (

    <MDBCard className="my-5 px-5 pt-5 pb-5 white">
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBView hover cascade waves>
                <img
                  src= {Trellopic}
                  className="img-fluid"
                /> 
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  Trello
                </h2>
                <p>
                  Check out our Trello page!
                </p>
                <MDBBtn className="btn-fb waves-light" color="indigo darken-4">
                  <MDBIcon icon="trello" />
                  <a href="https://trello.com/b/pipJjSew/capstone-project"><p className="white-text">Trello</p></a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                Our team chose to use Trello as our choice of project planning software. We chose to use Trello to manage our web project for two reasons. It is free and helps keep us organized and focused. 
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
    </MDBCard>
  );
}

export default Trello;
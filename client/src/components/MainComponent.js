import React from 'react';

import Signup from './Signup';

import Style from '../styles/MainComponent.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
  } from "mdbreact";



class Main extends React.Component {
  render() {
    return (
      <div>
     <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">

        {/* First Section */}
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="h1-responsive font-weight-bold">
                  Sign up right now!{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae, quisquam iste, maiores. Nulla.
                </h6>
                <MDBBtn outline color="white">
                  Learn More
                </MDBBtn>
              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard id="classic-card">
                  <MDBCardBody className="z-depth-2 indigo-text">
                    <h3 className="text-center ">
                      <MDBIcon icon="user" /> Register:
                    </h3>
                    <hr className="hr-light" />
                    <MDBInput icon="user" label="Your name" />
                    <MDBInput icon="envelope" label="Your email" type="email" />
                    <MDBInput icon="address-book" label="Zip Code"/>
                    <div className="text-center mt-4">
                      <MDBBtn color="indigo">Sign Up</MDBBtn>
                      <hr className="hr-light" />
                      <div className="text-center d-flex justify-content-center white-label">
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="twitter" className="indigo-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="linkedin" className="indigo-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="instagram" className="indigo-text" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>

{/* Second Section */}
<MDBContainer>
<section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Safety</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
</MDBContainer>


{/* Third Section */}
      <MDBContainer>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">International</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Experimental</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Relaxing</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Beloved</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flash" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Rapid</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Magical</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>


      </div>
    );
  }
}
export default Main;
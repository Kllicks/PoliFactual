import React from 'react';

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



class Home extends React.Component {
  render() {
    return (
      <div>
        {/* First Section */}
        <MDBContainer>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Polifactual{" "}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Bringing you your local, state, and national legislative representatives' information right to you from one source.
                    </h6>
                    <MDBBtn color="white">Download</MDBBtn>
                    <MDBBtn outline color="white">
                      Learn More
                    </MDBBtn>
                  </div>
                  <MDBCol md="6" xl="5" className="mt-xl-5">
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>







          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient">
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
          </MDBMask> */}
        </MDBContainer>
        {/*First Section */}
           {/* <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
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
       </MDBView> */}

 {/* Second Section */}
 <MDBContainer>
 <section className="my-5">
         <h2 className="h1-responsive font-weight-bold text-center my-5">
           Why is it so great?
         </h2>
         <p className="lead grey-text w-responsive text-center mx-auto mb-5">
           For those that have struggled to keep informed about poltics that affect thier every day lives, we have developed Polifactual to bring you all the information relevant too your neighborhood with just a few clicks.
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
                <h5 className="font-weight-bold mb-3">Local</h5>
                <p className="grey-text">
                 Local info
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">State</h5>
                <p className="grey-text">
                  State info
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">National</h5>
                <p className="grey-text">
                Polifactual can display your legislative representatives at a national level, such as President, Vice-President and information pertaining to their seats.
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
          What all can Polifactual do?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Below you will see several points highlighting some of our features  
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
                <h5 className="font-weight-bold mb-3">National</h5>
                <p className="grey-text">
                  Polifactual can display your legislative representatives at a national level
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
                Want to see who represents other areas and not just your current locality? You can change your information to display other localities and inform you of other representatives.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Personal</h5>
                <p className="grey-text">
                  Once you are registered, you will be able to see your unique homepage, with your local and state information.
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
                <h5 className="font-weight-bold mb-3">Twitter</h5>
                <p className="grey-text">
                  Want to go ahead and follow your representatives or like their posts? Polifactual allows you to see twitter feeds for those who are on the social media site.
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
                  With just a few clicks, all your relevant legislative information will be displayed before your eyes
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
export default Home;



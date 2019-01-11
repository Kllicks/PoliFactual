import React, { Component } from "react";

import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

class Team extends React.Component {
    render() {
      return (
        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Our team is compromised of four DigitalCrafts coding bootcamp graduates with varying backgrounds and interests. Below is a little bit more about us, check us out!
            </p>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Helen Harris</h5>
                <p className="text-uppercase blue-text">Software Engineer</p>
                <p className="grey-text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci sed quia non numquam modi tempora eius.
                </p>
                <ul className="list-unstyled mb-0">
                <a href="mailto:hchang0803@outlook.com" className="p-2 fa-lg">
                    <MDBIcon icon="envelope" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/helen-harris-50205b15/" className="p-2 fa-lg">
                    <MDBIcon icon="linkedin" className="blue-text" />
                  </a>
                  <a href="https://github.com/hharris0803" className="p-2 fa-lg">
                    <MDBIcon icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Brien Mizell</h5>
                <p className="text-uppercase blue-text">Software Engineer</p>
                <p className="grey-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  ipsa accusantium doloremque rem laudantium totam aperiam.
                </p>
                <ul className="list-unstyled mb-0">
                <a href="mailto:brienmizell@me.com" className="p-2 fa-lg">
                    <MDBIcon icon="envelope" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/brienmizell/" className="p-2 fa-lg">
                    <MDBIcon icon="linkedin" className="blue-text" />
                  </a>
                  <a href="https://github.com/brienmizell" className="p-2 fa-lg">
                    <MDBIcon icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Kyle Sekellick</h5>
                <p className="text-uppercase blue-text">Software Engineer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu laborum.
                </p>
                <ul className="list-unstyled mb-0">
                <a href="mailto:sekellickkyle@yahoo.com" className="p-2 fa-lg">
                    <MDBIcon icon="envelope" className="blue-text" />
                </a>
                  <a href="https://www.linkedin.com/in/kyle-sekellick-b16070135/" className="p-2 fa-lg">
                    <MDBIcon icon="linkedin" className="blue-text" />
                  </a>
                  <a href="https://github.com/Kllicks" className="p-2 fa-lg">
                    <MDBIcon icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                {/* <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                /> */}
                <h5 className="font-weight-bold mt-4 mb-3">Isaac Fonseca</h5>
                <p className="text-uppercase blue-text">Software Engineer</p>
                <p className="grey-text">
                  Exercise Physiologist turned Full- Stack Software Engineer, with a passion for competitive video gaming and soccer. 
                </p>
                <ul className="list-unstyled mb-0">
                <a href="mailto:isaacfo1010@gmail.com" className="p-2 fa-lg">
                    <MDBIcon icon="envelope" className="blue-text" />
                </a>
                  <a href="https://www.linkedin.com/in/isaac-fonseca10/" className="p-2 fa-lg">
                    <MDBIcon icon="linkedin" className="blue-text" />
                  </a>
                  <a href="https://github.com/isaacfo" className="p-2 fa-lg">
                    <MDBIcon icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  );
}
}

export default Team;
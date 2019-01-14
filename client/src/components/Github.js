import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

import Styles from '../styles/Github.css';

const Github = () => {
  return (
    <div>
      <section className="text-center my-5">
        <MDBRow>
          <MDBCol md="12" className="mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h2 className="purple-text py-3 font-weight-bold">
                    <MDBIcon icon="github" size="lg" />
                    <br />
                    <strong>Github</strong>
                  </h2>
                  <p className="pb-3">
                    Our group decided to use Github to make it easy to collaborate and look back at previous versions of our work. 
                    Please check out this projects repo on Github!
                    Dont forget to also check out our Trello Board! 
                  </p>
                  <MDBBtn color="secondary" rounded size="md" href="https://github.com/Kllicks/Polifactual">
                    <MDBIcon icon="clone" className="left"/>  See Github for Project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
}

export default Github;
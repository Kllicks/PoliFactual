import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

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
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h2 className="purple-text py-3 font-weight-bold">
                    <MDBIcon icon="github" size="lg" />
                    <br />
                    <strong>Project Github</strong>
                  </h2>
                  <p className="pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                    nam sit officia accusamus minus error nisi architecto
                    nulla ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="secondary" rounded size="md">
                    <MDBIcon icon="clone" className="left" /> See Github for Project
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
import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";

//import route Components
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";
  

  class FooterPage extends React.Component {
    render() {
    return (
    <Footer color="indigo darken-4 gradient" className="font-small pt-4 mt-4">
      <Container fluid className="text-center text-md-center">
        <Row>
          <Col md="6">
          <h5 className="title indigo darken-3">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
          </Col>
          <Col md="6">
          <h5 className="title indigo darken-3">More Information</h5>
          <ul>
            <li className="list-unstyled">
              <a href="#!">About Us</a>
            </li>
            <li className="list-unstyled">
              <a href="#!">Hiring? Checkout the developers that created Polifactual!</a>
            </li>
            {/* <li className="list-unstyled">
              <a href="#!">Link 3</a>
            </li>
            <li className="list-unstyled">
              <a href="#!">Link 4</a>
            </li> */}
          </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=""> Helen, Kyle, Brien, Isaac Fonseca </a>
        </Container>
      </div>
    </Footer>
    );
    }
    }
    
    export default FooterPage;
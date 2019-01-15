import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";

import Styles from '../styles/Footer.css';

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
          <Col md="12" className="indigo darken-3 footer">
              <a href="#!">Help</a>
              <a href="#!">Jobs</a>
              <a href="#!">Terms</a>
              <a href="#!">Privacy</a>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <p> Helen, Kyle, Brien, Isaac Fonseca </p>
        </Container>
      </div>
    </Footer>
    );
    }
    }
    
    export default FooterPage;
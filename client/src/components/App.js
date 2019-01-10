import React, { Component } from "react";
import "../styles/App.css";
import FooterPage from './Footer';

import Login from "./Login";
import Register from "./Register";

import Home from "./HomeComponent";
import Locals from './LocalComponent';
import States from './StateComponent';
import Nationals from './NationalComponent';
import Team from './Team';
import Trello from './Trello';
import Github from './Github';

import axios from 'axios';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
import { MDBBtn } from "mdbreact";


import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  clickLogout = () => {
    axios.post("/api/logout").then(res => {
      this.setState({ isLoggedIn: false });
    });
  }

  doLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  }

  componentDidMount() {
    axios.get("/api/verify"). then(res => {
      if (res.data.user){
        this.setState({ isLoggedIn: true }, () => {
          const user = res.data.user;
          sessionStorage.setItem('streetaddress', user.streetaddress);
          sessionStorage.setItem('currentstate', user.currentstate);
          sessionStorage.setItem('zipcode', user.zipcode);
          console.log("logged in");
        });
      } else {
      }
    })
  }

// toggleCollapse = this.setState({ isOpen: !this.state.isOpen });


  render() {
    return (
      <div className="App bg">
      <Router>
        <>
            <Navbar color="transparent" dark expand="md">
              <NavbarBrand>
              <strong className="white-text">Polifactual</strong>
              </NavbarBrand>
              <NavbarToggler
              onClick={this.toggleCollapse}
              />
              <Collapse
              id="navbarCollapse3"
              isOpen={this.state.isOpen}
              navbar
              >
            <NavbarNav left>
              <NavItem active>
              <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem active>
              <NavLink to="/Register">Register</NavLink>
              </NavItem>
              <NavItem active>
              <NavLink to="/Login">Login</NavLink>
              </NavItem>
              <NavItem active>
              <NavLink to="/Github">Github</NavLink>
              </NavItem>
              <NavItem active>
              <NavLink to="/Trello">Trello</NavLink>
              </NavItem>
              <NavItem active>
              <NavLink to="/Team">Meet The Team</NavLink>
              </NavItem>
              <NavItem>
              <Dropdown>
                  <DropdownToggle nav caret>
                  <div className="d-none d-md-inline">Profile</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem href="/Local">Local</DropdownItem>
                  <DropdownItem href="/State">State</DropdownItem>
                  <DropdownItem href="/National">National</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <FormInline waves>
                      <div className="md-form my-0 indigo darken-4">
                      <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                      />
                      </div>
                  </FormInline>
                </NavItem>
                {
                  this.state.isLoggedIn ? <button onClick={this.clickLogout}>Logout</button> : <button onClick={this.clickLogin}>Login</button>
                }

              </NavbarNav>
             
             
              
              </Collapse>
              </Navbar>

            {/* ROUTES */}
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/Signup" component={Signup} /> */}
              <Route exact path="/Login" render={(props) => {
                  return (<Login doLoggedIn={this.doLoggedIn} {...props} />)
              }} />
              <Route path="/Register" component={Register} />
              <Route path= "/Github" component={Github}/>
              <Route path= "/Trello" component={Trello}/>
              <Route path= "/Team" component={Team}/>
              <Route path="/Local" component={Locals}/>
              <Route path= "/State" component={States}/>
              <Route path= "/National" component={Nationals}/>

            </>
          </Router>

				{/* Footer */}
				<FooterPage />

			</div>
		);
	}
}


export default App;

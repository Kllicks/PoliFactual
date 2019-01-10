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
      // isLoggedIn: false
    };
  }

  // toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  // componentDidMount() {
  //   setInterval(this.checkLoggedIn, 3005);
  // }

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
              </NavbarNav>
                {/* {this.showLogoutButton()} */}
                {/* <MDBBtn rounded color="danger">Logout</MDBBtn> */}
              </Collapse>
              </Navbar>

            {/* ROUTES */}
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Login" component={Login} />
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

// showLogoutButton = () => {
//   let shouldShowLogout = false;
  // if (this.props.location.pathname === "/Login") {
  //   shouldShowLogout = false;
  // } else if (this.props.location.pathname === "/Register") {
  //   shouldShowLogout = false;
  // } else if (this.props.location.pathname === "/") {
  //   shouldShowLogout = false;
  // } else if (this.state.isLoggedIn) {
  //   shouldShowLogout = true;
  // } else {
  //   shouldShowLogout = false;
  // }

  //  if (shouldShowLogout) {
  //   return (
  //     <li>
  //       <a href="#" onClick={this.logOut}>
  //         Logout
  //       </a>
  //     </li>
  //   );
  // } else {
  //   return null;
  // }
// };

// checkLoggedIn = () => {
//   axios.get("/api/verify").then(res => {
//     // console.log(res);
//     this.setState(
//       {
//         isLoggedIn: res.data !== "" // If it's not empty, then it's their user id, which means, they're logged in
//       },
//       () => {
//         if (this.props.location.pathname === "/signup") {
//           console.log("you are at signup you are ok");
//         } else if (this.props.location.pathname === "/about") {
//           console.log("you are at about you are ok");
//         } else if (this.state.isLoggedIn) {
//           console.log("you are at logged in you are ok");
//         } else {
//           console.log("go home");
//           this.props.history.push("/");
//         }
//       }
//     );
//   });
// };

// logOut = () => {
//   axios.post("/api/logout").then(res => {
//     this.setState({ isLoggedIn: false });
//   });
// };

export default App;

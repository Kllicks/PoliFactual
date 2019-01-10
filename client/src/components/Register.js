import React, {Component} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/Register.css'


class Register extends Component {
    constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
			username: '',
			streetaddress: '',
			currentstate: '',
			zipcode: '',
			password: ''
		};
    }
    
    _handleName = event => {
		const value = event.target.value;

		this.setState({
			name: value
		});
    }

    _handleUsername = event => {
		const value = event.target.value;

		this.setState({
			username: value
		});
    }
    
    _handleStreetAddress = event => {
		const value = event.target.value;

		this.setState({
			streetaddress: value
		});
    }

    _handleCurrentState = event => {
		const value = event.target.value;

		this.setState({
			currentstate: value
		});
    }

    _handleZipcode = event => {
		const value = event.target.value;

		this.setState({
			zipcode: value
		});
    }

	_handlePassword = event => {
		const value = event.target.value;

		this.setState({
			password: value
		})
	}

	_handleSubmit = event => {
		event.preventDefault();

		axios
			.post("/api/register", this.state)
			.then(response => {
				// Need a response including the address from userObj
			})
	}

    render() {
        return (
            <div class="container-register">
                <div class="title">
                    <i class="material-icons lock"></i> Register
                </div>

                <form className="signup-form" onSubmit={this._handleSubmit}>
                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">person</i>
                            </div>
                        </div>
                        <input 
                            id="name" 
                            placeholder="Name" 
                            type="text" 
                            name="name" 
                            autocomplete="off"
                            onChange={this._handleName}
                            value={this.state.name}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>

                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">face</i>
                            </div>
                        </div>
                        <input 
                            id ="username" 
                            placeholder="Username" 
                            type="text" 
                            name="username" 
                            autocomplete="off"
                            onChange={this._handleUsername}
							value={this.state.username}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>
                    
                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">face</i>
                            </div>
                        </div>
                        <input 
                            id ="streetaddress" 
                            placeholder="Street Address" 
                            type="text" 
                            name="streetaddress" 
                            autocomplete="off"
                            onChange={this._handleStreetAddress}
							value={this.state.streetaddress}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>
                    
                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">face</i>
                            </div>
                        </div>
                        <input 
                            id ="currentstate" 
                            placeholder="State" 
                            type="text" 
                            name="currentstate" 
                            autocomplete="off"
                            onChange={this._handleCurrentState}
							value={this.state.currentstate}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>
                    
                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">face</i>
                            </div>
                        </div>
                        <input 
                            id ="zipcode" 
                            placeholder="Zipcode" 
                            type="text" 
                            name="zipcode" 
                            autocomplete="off"
                            onChange={this._handleZipcode}
							value={this.state.zipcode}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>

                    <label>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">vpn_key</i>
                            </div>
                        </div>
                        <input 
                            id="password" 
                            placeholder="Password" 
                            type="password" 
                            name="password" 
                            autocomplete="off"
                            onChange={this._handlePassword}
							value={this.state.password}
                        />
                    </label>
                    
                    <br/>
                    <div class="clearfix"></div>
                
                    <div class="remember-me">
                        <input type="checkbox"/>
                        <span>I accept Terms of Service</span>
                    </div>

                    <input type="submit" value="Register"/>

                </form>   
            
                <div class="privacy">
                    <a href="#">Privacy Policy</a>
                </div>

                <div class="register">
                    <span>Already have an account?</span>
                    <Link to="/login">Log In Here</Link>
                </div>
            </div>
        )
    }
};

export default Register;



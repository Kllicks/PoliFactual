import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Login.css"

class Login extends Component {
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

	_handleUsername = event => {
		const value = event.target.value;

		this.setState({
			username: value
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
			.post("/api/login", this.state)
			.then(response => {
				// Need a response including the address from userObj
				if (response.data.status !== "Good") {
					alert("Try Again");
				} else {
					console.log(response.data)
					const user = response.data.user;
					console.log(user);
					
					// Save data to sessionStorage
					// sessionStorage.setItem('key', 'value');
					sessionStorage.setItem('streetaddress', user.streetaddress);
					sessionStorage.setItem('currentstate', user.currentstate);
					sessionStorage.setItem('zipcode', user.zipcode);

					// Get saved data from sessionStorage
					let streetaddress = sessionStorage.getItem('streetaddress');
					console.log(streetaddress);
					let currentstate = sessionStorage.getItem('currentstate');
					console.log(currentstate);
					let zipcode = sessionStorage.getItem('zipcode');
					console.log(zipcode);

					this.props.history.push("/local")
				}
				
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
	return (
		<div class="container-login">
			<div class="title">
				<i class="material-icons lock"></i> Login
			</div>

			<form className="signup-form" onSubmit={this._handleSubmit}>
				<label>
					<div class="input">
						<div class="input-addon">
							<i class="material-icons">face</i>
						</div>
						<input 
							id="username" 
							placeholder="Username" 
							type="text" 
							name="username" 
							autocomplete="off" 
							onChange={this._handleUsername}
							value={this.state.username}
						/>
					</div>
				</label>

				<br/>
				<div class="clearfix"></div>

				<label>
					<div class="input">
						<div class="input-addon">
							<i class="material-icons">vpn_key</i>
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
					</div>
				</label>
				<br/>
				<div class="clearfix"></div>

				<div class="remember-me">
					<input type="checkbox"/>
					<span>Remember Me</span>
				</div>
				<input type="submit" value="Log In"/>
			</form>

			<div class="forgot-password">
				<a href="#">Forgot your password?</a>
			</div>
			<div class="privacy">
				<a href="#">Privacy Policy</a>
			</div>

			<div class="register">
				<span>Don't have an account yet?</span>

				<Link to="/register">Register here!</Link>
			</div>
			
		</div>
	)

}


};

		

export default Login;
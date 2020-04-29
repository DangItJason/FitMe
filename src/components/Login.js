import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

	state = {
		email: "",
		password: "",
		login: null,
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		//Later we can make this functional.
		event.preventDefault();
		console.log(this.state)
	}

	auth() {
		fetch("http://localhost:9000/login/login", {
			method: 'post',
			body: JSON.stringify(this.state),
			headers: { //Make sure your header content type you specify and body type match.
				'Content-Type': 'application/json',
			},
		})
			.then(res => this.setState({
				login: res.json(),
			}));
	}

	handleSubmit = event => {
		//We can add true sign up functionality later.
		event.preventDefault();
		//console.log(this.state)
		console.log("Before " + this.state.login);
		this.auth();
		console.log("After " + this.state.login);
		// if (this.auth()) {
		// 	//Proceed to home page.
		// 	console.log("Log in success");
		// }
	}

	render() {
		return (
			<div>
				<div className="sidenav">
					<div className="login-main-text">
						<h2>Login</h2>
						<p>Enter your email and password to access.</p>
					</div>
				</div>
				<div className="main">
					<div className="col-md-6 col-sm-12">
						<div className="login-form">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>Email</label>
									<input
										type="text"
										className="form-control"
										placeholder="Email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label>Password</label>
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										value={this.state.password}
										name="password"
										onChange={this.handleChange} />
								</div>
								<button type="submit" className="btn btn-black">Login</button>
								<button type="submit" className="btn btn-secondary">Register</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
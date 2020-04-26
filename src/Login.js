import React, { Component } from 'react';
//import authLogin from './auth.js';

class Login extends Component {
	
	state = {
		email: "",
		password: "",
	};

	handleChange  = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		//Later we can make this functional.
		event.preventDefault();
		console.log(this.state)
	}

 	render() {
 		return( 
			<form onSubmit = {this.handleSubmit}>
				<div>
				<input onChange = {this.handleChange}
					name = "email" 
					value = {this.state.email} 
					placeholder = "Email">
				</input>
				</div>
				<div>
				<input onChange = {this.handleChange} 
					name = "password"
					type = "password" 
					value = {this.state.password} 
					placeholder = "Password">	
				</input>
				</div>
				<button type="submit">Submit</button>
			</form>
 		)
 	}
}

export default Login;
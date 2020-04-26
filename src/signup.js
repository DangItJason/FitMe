import React, { Component } from 'react';
//import authLogin from './auth.js';

class Signup extends Component {
	
	state = {
        name: "",
        email: "",
		password: "",
	};

	handleChange  = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    isPasswordValid = event => {
        //return if password is valid, true. password is not valid, false.

        if (this.state.password.length < 8) {
            console.log("Password does not contain at least 8 characters.")
            return false;
        } 
        
        return true;
    }

	handleSubmit = event => {
        //We can add true sign up functionality later.
        event.preventDefault();
        if (this.isPasswordValid()) {
            console.log(this.state)
        }
	}

 	render() {
 		return( 
			<form onSubmit = {this.handleSubmit}>
                <div>
				<input onChange = {this.handleChange}
					name = "name" 
					value = {this.state.name} 
					placeholder = "Name">
				</input>
				</div>
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

export default Signup;
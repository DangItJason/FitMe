import React, { Component } from 'react';
//import authLogin from './auth.js';

class Login extends Component {
	
	
	state = {
		text: "Sucesss"
	};

	handlerSubmit = () => {
		this.setState({
			text: "Button Clicked"
		});
	};

 	render() {
 		return(
 			<div class = "container">
 				<div class = "card">
		 			<form>
            <h3 id = "login_title">Log In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" id = "email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" id = "password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button onClick = {this.handlerSubmit} className="btn btn-primary btn-block">{this.state.text}</button>
            <div>{this.state.text}</div>
        	</form>
      	</div>
    	</div>
 		)
 	}
}

export default Login;
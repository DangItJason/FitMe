import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

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
			<Card>
				<Card.Title>Log In</Card.Title>
				<Form onSubmit={this.handleSubmit}>
					<InputGroup className="mb-3">
						<FormControl
							onChange={this.handleChange}
							name="email"
							placeholder="Email"
							value={this.state.email}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							onChange={this.handleChange}
							name="password"
							placeholder="Password"
							type="password"
							value={this.state.password}
						/>
					</InputGroup>
					<button type="submit" variant="primary">Log In</button>
				</Form>
			</Card>
		)
	}
}

export default Login;
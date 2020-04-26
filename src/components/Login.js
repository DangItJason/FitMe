import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Login extends Component {

	state = {
		email: "",
		password: "",
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
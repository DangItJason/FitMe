import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

//import authLogin from './auth.js';

class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
    };

    handleChange = event => {
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
        return (
            <Card>
                <Card.Title>Sign Up</Card.Title>
                <Form onSubmit={this.handleSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={this.handleChange}
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                        />
                    </InputGroup>
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
                    <button type="submit" variant = "primary">Sign Up</button>
                </Form>
            </Card>
        )
    }
}

export default Signup;
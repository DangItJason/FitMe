import React, { Component } from 'react';
import './Login.css'; //same CSS as login...

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

    callAPI() {
        fetch("http://localhost:9000/signup/signup", {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: { //Make sure your header content type you specify and body type match.
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    handleSubmit = event => {
        //We can add true sign up functionality later.
        event.preventDefault();
        if (this.isPasswordValid()) {
            //console.log(this.state)
            this.callAPI();
        }
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Sign Up!</h2>
                        <p>Enter your name, email and password.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-4 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
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
                                <button type="submit" className="btn btn-black">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
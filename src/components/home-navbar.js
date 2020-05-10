import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Home_Navbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">Welcome back {this.props.name}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Exercises</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Home_Navbar;
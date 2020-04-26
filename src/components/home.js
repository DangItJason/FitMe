import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Home extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">FitMe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Exercises</Nav.Link>
                    <Nav.Link href="">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Home;
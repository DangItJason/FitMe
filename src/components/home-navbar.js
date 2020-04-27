import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Home_Navbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">FitMe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Exercises</Nav.Link>
                    <Nav.Link href="">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Home_Navbar;
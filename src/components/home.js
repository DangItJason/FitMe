import React, { Component } from 'react';
import Home_Navbar from './home-navbar';
import Home_Api from './home_api';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    render() {
        return (
            <Container>
                <Col>
                    <Home_Navbar></Home_Navbar>
                    <Home_Api></Home_Api>
                </Col>
            </Container>

        )
    }
}

export default Home;
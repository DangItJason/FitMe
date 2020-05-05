import React, { Component } from 'react';
import Home_Navbar from './home-navbar';
import Home_Main from './home_main';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    render() {
        return (
            <Container>
                    <Home_Navbar></Home_Navbar>
                    <Home_Main></Home_Main>
            </Container>
        )
    }
}

export default Home;
import React, { Component } from "react";
import Home_Navbar from "./home-navbar";
import Home_Main from "./home_main";
import Container from "react-bootstrap/Container";

function Home(props) {
  return (
    <Container>
      <Home_Navbar name={props.location.name}></Home_Navbar>
      <Home_Main email={props.location.email}></Home_Main>
    </Container>
  );
}

export default Home;

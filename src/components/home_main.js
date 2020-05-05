import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Home_main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            exercises: "Hello",
        };
    }

    getExercises = () => {
        fetch("http://localhost:9000/home/home", {
            method: 'post',
			body: JSON.stringify(this.state),
			headers: { 
				'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => this.setState({
            exercises: data
        }));
    }

    componentDidMount = () => {
        this.getExercises();
    }

    render() {
        return (
            <Container>
                <div>Home Main</div>
                <div>{this.state.exercises}</div>
            </Container>
            
        )
    }
}

export default Home_main;
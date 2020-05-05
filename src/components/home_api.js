import React, { Component } from 'react';

class Home_Api extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            exercises: null,
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
        .then(res => res.json())
        .then(res => this.setState({
            exercises: res
        }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>{this.state.apiResponse}</div>
        )
    }
}

export default Home_Api;
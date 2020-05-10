import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Home_main extends Component {
    constructor(props) {
        super(props);
        this.state = {

            exercise: "",
            exercises: "Hello",
        };
    }

    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
    
    handleSubmitExercise = () => {
        fetch("http://localhost:9000/home/home", {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    handleGetExercises = () => {

        fetch("http://localhost:9000/home/homes", {
            method: 'post',
            body: JSON.stringify(this.props.email),
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
        this.handleGetExercises();
    }

    render() {
        return (
            <Container>
                <br></br>
                <form onSubmit = {this.handleSubmitExercise}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name of exercise"
                            name="email"
                            value={this.state.exercise}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-black">Add Exercise</button>
                </form>
            </Container>

        )
    }
}

export default Home_main;
import React, { Component } from 'react';
import Home from './home.js';

class FetchHomeData extends Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        //const url = "my api url";
        //const response = await fetch(url);
        //const data = await response.json();
        this.setState({
           loading: false
        })
    }
    
    
    render() {
        if (this.state.loading) {
            return(
                <div>...loading...</div>
            )
        }
        else if (!this.state.loading) {
            return(
                <Home></Home>
            )
        }
    }
}


export default Home;
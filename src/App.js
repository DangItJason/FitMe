import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login.js";
import Signup from "./components/signup.js"
import Home from "./components/home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;


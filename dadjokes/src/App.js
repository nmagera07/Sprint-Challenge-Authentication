import React from 'react';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Jokes from './components/Jokes'
import PrivateRoute from './components/PrivateRoute'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-body">
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/jokes" component={Jokes} />
      </Router>
      </div>
    </div>
  );
}

export default App;

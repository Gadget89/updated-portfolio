import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Landing/>
      </div>

    );
  }
}

export default App;

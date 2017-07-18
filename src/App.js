import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'
import CanvasComponent from './Canvas'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Landing/>
        <CanvasComponent/>
      </div>
    );
  }
}

export default App;

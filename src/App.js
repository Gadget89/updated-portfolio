import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'
import CanvasComponent from './Canvas'
import About from './About'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Landing/>
        <CanvasComponent/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;

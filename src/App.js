import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'
import CanvasComponent from './Canvas'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <main>
        <Nav/>
        <Landing/>
        <CanvasComponent/>
        <section className="page-content-container">
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
        </section>
      </main>
    );
  }
}

export default App;

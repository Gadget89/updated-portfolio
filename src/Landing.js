import React, { Component } from 'react';

import './main.css';
import Hero from './assets/new-hero-photo.jpeg'

class Landing extends Component {
  render() {
    return (
      <main>
        <section>
          <img alt='' className="landing-hero-img" src={Hero}></img>
        </section>
        <aside className="landing-message">
          <h2>Hello!</h2>
          <h3>Welcome to my portfolio.</h3>
          <h4>Start Exploring!</h4>
        </aside>
      </main>
    );
  }
}

export default Landing;

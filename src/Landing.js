import React, { Component } from 'react';

import './main.css';
import Basketball from './assets/new-hero-photo.jpeg'

class Landing extends Component {
  render() {
    return (
      <div>
        <img alt='' className="landing-hero-img" src={Basketball}></img>
      </div>
    );
  }
}

export default Landing;

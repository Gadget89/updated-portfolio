import React, { Component } from 'react';

import './main.css';
import Basketball from './assets/hero-photo.jpeg'

class Landing extends Component {
  render() {
    return (
      <div>
        <img alt='' src={Basketball}></img>
      </div>
    );
  }
}

export default Landing;

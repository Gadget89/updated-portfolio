import React, { Component } from 'react';

import './main.css';
import Logo from './assets/Zia-Logo.png';


class Nav extends Component {
  render() {
    return (
      <nav className='nav-container'>
        <div className='nav-background'></div>
        <img alt='' className='nav-logo' src={Logo}></img>
        <ul className='nav-list-container'>
          <li>My Story</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

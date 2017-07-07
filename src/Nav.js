import React, { Component } from 'react';

import './main.css';
import Logo from './assets/Zia-Logo.png';


class Nav extends Component {
  render() {
    return (
      <nav className='nav-container'>


        <ul className='nav-list-container'>
          <li>My Story</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
        <img alt='' className='nav-logo' src={Logo}></img>
        <div className='nav-background'></div>
      </nav>
    );
  }
}

export default Nav;

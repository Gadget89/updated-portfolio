import React, { Component } from 'react';

import './main.css';
import Logo from './assets/new-logo.png';


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
        <i className="fa fa-github" aria-hidden="true"></i>
      </nav>
    );
  }
}

export default Nav;

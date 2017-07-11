import React, { Component } from 'react';

import './main.css';
import Logo from './assets/new-logo.png';


class Nav extends Component {
  render() {
    return (
      <header>
        <nav className='nav-container'>
          <ul className='nav-list-container'>
            <li>My Story</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
          <a href="">
            <img alt='Go back to home page' className='nav-logo' src={Logo}></img>
          </a>
          <div className='nav-background'></div>
        </nav>
      </header>
    );
  }
}

export default Nav;

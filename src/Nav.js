import React, { Component } from 'react';

import './main.css';
import Logo from './assets/new-logo.png';


class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav-container">
          <ul className="nav-list-container" id="mobile-disp-hide">
            <li>My Story</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
          <a href="">
            <img alt='Go back to home page' className='nav-logo' src={Logo}></img>
          </a>
          <span className="mobile-nav-menu-icon">
            <a>
              <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </a>
          </span>
          <div className='nav-background'></div>
        </nav>
      </header>
    );
  }
}

export default Nav;

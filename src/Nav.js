import React, { Component } from 'react';
import './main.css';
import Logo from './assets/new-logo.png';

// Array of navigation buttons data
const navButtons = [
  {
    id: "about",
    link: "",
    name: "my story",
    title: "Check out my story."
  },
  {
    id: "projects",
    link: "",
    name: "projects",
    title: "Check out my projects"
  },
  {
    id: "contact",
    link: "",
    name: "contact me",
    title: "Let's get in touch"
  },
  {
    id: "blog",
    link: "https://medium.com/@nicolas.roybal",
    name: "blog",
    title: "Check out my blog"
  }
]

// Map through array and return a <li>
const listItems = navButtons.map((button) =>
  <li key={button.id}>
    <a
      title={button.title}
      href={button.link}>
      {button.name}
    </a>
  </li>
)

class Nav extends Component {

  render() {
    return (
      <header>
        <nav className="nav-container">
          <ul className="nav-list-container" id="mobile-disp-hide">{listItems}
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

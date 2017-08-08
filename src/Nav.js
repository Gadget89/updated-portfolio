import React, { Component } from 'react';
import './main.css';
import Logo from './assets/new-logo.png';

// const trigger = (event) => {
//   event.preventDefault();
//   console.log("yo");
// }



// Array of navigation buttons data
const navButtons = [

  {
    id: "about",
    name: "my story",
    link: "#about",
    title: "Check out my story."
  },
  {
    id: "projects",
    name: "projects",
    link: "#projects",
    title: "Check out my projects"
  },
  {
    id: "contact",
    name: "contact me",
    link: "#contact",
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
  <li
    key={button.id}>
    <a
      title={button.title}
      href={button.link}
      onClick={button.onCLick}>
      {button.name}
    </a>
  </li>
)

function  openNav() {
  document.getElementById('modal').className = "open-mobile-nav"
  document.getElementById('open').style.display = "none"
  document.getElementById('exit').style.display = "block"
  // document.getElementById('open').className = "close"
  // document.getElementById('exit').className = "open"
  document.getElementById('exit').style.display = "block"
  window.scrollTo(0, 0)
}

function closeNav() {
  document.getElementById('modal').className = "close-mobile-nav"
  document.getElementById('exit').style.display = "none"
  document.getElementById('open').style.display = "block"
  // document.getElementById('exit').className = "close"
  // document.getElementById('open').className = "open"
  document.getElementById('open').style.display = "block"
}
// var trigger = () => {
//   console.log(window.innerWidth);
//   if(window.innerWidth > 1024){
//     window.scroll(0, 1000)
//   }
// }

class Nav extends Component {

  render() {
    return (
      <section>
        <header>
          <nav
            className="nav-container">
            <ul
              className="nav-list-container"
              id="mobile-disp-hide">
              {listItems}
            </ul>
            <a
              href="">
              <img
                alt=""
                title='Go back to home page'
                className='nav-logo'
                src={Logo}>
              </img>
            </a>
            <span
              className="mobile-nav-menu-icon">
                <div>
                  <i
                    id="open"
                    className="open fa fa-bars fa-2x"
                    onClick={openNav}
                    aria-hidden="true">
                  </i>
                  <i
                    id="exit"
                    className="close fa fa-times fa-2x"
                    onClick={closeNav}
                    aria-hidden="true">
                  </i>
                </div>
            </span>
            <div
              className='nav-background'>
            </div>
          </nav>
          <ul
            className="nav-modal"
            id="modal">
            {listItems}
          </ul>
        </header>
      </section>
    );
  }
}


export default Nav;

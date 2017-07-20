import React, { Component } from 'react';
import './main.css';

const footerItem = [
  {
    id: "github",
    link: "https://github.com/Gadget89",
    icon: "fa fa-github fa-3x",
    title: "Check out my GitHub."
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/nicolas-roybal-54bb1413a",
    icon: "fa fa-linkedin fa-3x",
    title: "Check out my LinkedIn."
  },
  {
    id: "medium",
    link: "https://medium.com/@nicolas.roybal/",
    icon: "fa fa-medium fa-3x",
    title: "Check out my blog on Medium."
  },
  {
    id: "codepen",
    link: "http://codepen.io/nickr999/",
    icon: "fa fa-codepen fa-3x",
    title: "Check out my Codepen."
  }
]
// Map through array and return a <li>
const listItems = footerItem.map((item) =>
  <li
    key={item.id}>
    <a
      title={item.title}
      href={item.link}
      rel="noopener noreferrer"
      target="_blank">
      <i className={item.icon}></i>
    </a>
  </li>
)
class Footer extends Component {

  render() {
    return (
      <footer className="footer-container">
        <ul className="footer-link-container">
          {listItems}
        </ul>
      </footer>
    );
  }
}


export default Footer;

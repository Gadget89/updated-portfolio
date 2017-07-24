import React, { Component } from 'react';
import './main.css';
import Blog from './assets/laptop-blog.png'
import Sudoku from './assets/laptop-sudoku.png'
import Gist from './assets/laptop-gist.png'


const slides = [
  {
    id: "gist",
    photo: {Gist},
    link: "https://the-gist-app.herokuapp.com/#/",
    git: "",
    title: "The Gist App",
    text: "Description of app"
  },
  {
    id: "blog",
    photo: {Blog},
    link: "https://client-week-project.herokuapp.com/",
    git: "",
    title: "All Things Spurs Blog",
    text: "Description of app"
  },
  {
    id: "sudoku",
    photo: {Sudoku},
    link: "https://sudoku-puzzle-sa.herokuapp.com/#/",
    git: "",
    title: "Sudoku Solver",
    text: "Description of app"
  }
]

const slideItems = slides.map((slide) =>
  <article
    className="slide-container"
    key={slide.id}>
    <img
      alt={slide.title}
      className="slide-image"
      src={slide.photo}>
    </img>
    <aside
      className="slide-info">
      <h2
        className="slide-content">
        {slide.title}
      </h2>
      <p
        className="slide-content">
        {slide.text}
      </p>
      <nav
        className="slide-links">
        <a
          href={slide.git}
          rel="noopener noreferrer"
          target="_blank"
          title={slide.title + " git repository."}>
          <i
            className="fa fa-github fa-3x">
          </i>
        </a>
        <a
          href={slide.link}
          rel="noopener noreferrer"
          target="_blank"
          title={slide.title + " website."}>
          <i
            className="fa fa-globe fa-3x">
          </i>
        </a>
      </nav>
    </aside>
  </article>
)
console.log(slides);

class Projects extends Component {

  // Map through array and display one slide every 10 seconds

  render() {
    return (
      <section>
        {slideItems}
      </section>
    );
  }
}

export default Projects;

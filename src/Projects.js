import React, { Component } from 'react';
import './main.css';
import Blog from './assets/laptop-blog.png'
import Sudoku from './assets/laptop-sudoku.png'
import Gist from './assets/laptop-gist.png'

console.log(Blog, Sudoku, Gist);

const slides = [
  {
    id: "gist",
    photo: "/static/media/laptop-gist.bdd93949.png",
    link: "https://the-gist-app.herokuapp.com/#/",
    git: "",
    title: "The Gist App",
    text: "Description of app"
  },
  {
    id: "blog",
    photo: "/static/media/laptop-blog.3b693321.png",
    link: "https://client-week-project.herokuapp.com/",
    git: "",
    title: "All Things Spurs Blog",
    text: "Description of app"
  },
  {
    id: "sudoku",
    photo: "/static/media/laptop-sudoku.7385c2c8.png",
    link: "https://sudoku-puzzle-sa.herokuapp.com/#/",
    git: "",
    title: "Sudoku Solver",
    text: "Description of app"
  }
]
console.log(slides[1].photo);

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
// console.log(slides.photo);

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

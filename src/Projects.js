import React, { Component } from 'react';
import './main.css';

const slides = [
  {
    id: "sudoku",
    photo: "/static/media/laptop-sudoku.7385c2c8.png",
    link: "https://sudoku-puzzle-sa.herokuapp.com/#/",
    git: "",
    title: "Sudoku Solver",
    text: "This app uses brute force to solve sudoku puzzles and can identify if a puzzle cannot be solved."
  },
  {
    id: "gist",
    photo: "/static/media/laptop-gist.bdd93949.png",
    link: "https://the-gist-app.herokuapp.com/#/",
    git: "",
    title: "The Gist App",
    text: "An app created for developer's tool belts to create and store notes."
  },
  {
    id: "blog",
    photo: "/static/media/laptop-blog.3b693321.png",
    link: "https://client-week-project.herokuapp.com/",
    git: "",
    title: "Spurs Blog",
    text: "First group project develpoing a blog dedicated to San Antonio's basketball team."
  }
]


const slideItems = slides.map((slide) =>
  <article
    className="slide-container"
    key={slide.id}>
    <a
      href={slide.link}
      rel="noopener noreferrer"
      target="_blank"
      title={"Check out " + slide.title + " website."}>
      <img
        alt={slide.title}
        className="slide-image"
        src={slide.photo}>
      </img>
    </a>
    <aside
      className="slide-info">
      <h2
        className="slide-content, component-content-title">
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
      <section
        className="slides-container"
        id="projects">
        <h2 className="component-content-title">PROJECTS</h2>
        {slideItems}
      </section>
    );
  }
}

export default Projects;

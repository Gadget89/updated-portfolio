import React, { Component } from 'react';
import './main.css';
import Hero from './assets/new-hero-photo.jpeg'

class Landing extends Component {
  componentDidMount() {
      this.updateMessage();
  }
  updateMessage(){
    function changeText(element, texts, time) {

      var text = texts.splice(0, 1)[0];
      if (text) {
        element.innerHTML = text;
        setTimeout(function () {
          changeText(element, texts, time);
        }, time);
      }

    }

    var element = document.getElementById("change");
    var texts = [
      'Hello!',
      'My name is Nicolas.',
      'Welcome to my portfolio.',
      'Start exploring!'
    ];
    var time = 3500;

    changeText(element, texts, time);

  }

  render() {
    return (
      <main>
        <section>
          <img alt='' className="landing-hero-img" src={Hero}></img>
        </section>
        <aside className="landing-message">
          <p id="change"></p>
        </aside>
      </main>
    );
  }
}

export default Landing;

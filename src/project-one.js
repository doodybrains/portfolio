import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-1.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-2.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-3.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-4.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-5.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-6.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-7.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/example-boring-website.png",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/lit-website.png"
];

class ProjectOne extends Component {
  render() {
    const mainText = (
      "undecided.js is a command line tool for building single page websites. Built on top of Node.js the program can be installed through NPM. Each user's website, along with the links included, is automatically uploaded to theinernetisuroyster.net. The intention behind the tool is to make common web development tools accessible to a non-programmer while also proving an alternative platform for sharing information without the interference of algorithms or advertisements."
    );

    const subText = (
      "Node.js, NPM, Amazon s3, Heroku, Express"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="1"
            next="/project-two"
            last="/"
            title="undecided.js / the internet is ur oyster"
            subTitle="command line tool"
            mainText={mainText}
            subText={subText}
            images={images}
            link="https://desolate-scrubland-97851.herokuapp.com/"
            github="https://github.com/doodybrains/undecided"
            />
        </div>
      </div>
    );
  }
}

export default ProjectOne;

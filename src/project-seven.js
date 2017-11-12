import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-1.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-2.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-3.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-4.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-5.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-6.jpg"
];

class ProjectSeven extends Component {
  render() {
    const mainText = (
      "An app for sharing music, Mixtape is built with React and the are.na API."
    );

    const subText = (
      "React, are.na API"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="7"
            next="/project-one"
            last="/project-six"
            title="Mixtape + Are.na API"
            subTitle="subtitle"
            mainText={mainText}
            subText={subText}
            images={images}
            link="https://mixxxtape.herokuapp.com/#/"
            />
        </div>
      </div>
    );
  }
}

export default ProjectSeven;

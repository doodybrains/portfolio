import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/1-what.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/2-is.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/3-love.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/4-where.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/5-is.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/6-chuck-norris.jpg"
];

class ProjectFive extends Component {
  render() {
    const mainText = (
      "Photographs of one person’s skin while they browsed the resulting websites of the most popular Google searches in the year 2010. The color of light coming from these sites is meant to signify a deeper understanding into the physicality of what many internet users were looking at."
    );

    const subText = (
      "Digital Camera, Laptop computer"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="5"
            next="/project-six"
            last="/project-four"
            title="We're all on the internet together"
            subTitle="Photography Series"
            mainText={mainText}
            subText={subText}
            images={images}
            />
        </div>
      </div>
    );
  }
}

export default ProjectFive;

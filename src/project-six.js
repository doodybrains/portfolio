import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/1-newyork.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/2-oklahoma.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/3-massachusetts.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/4-maryland.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/5-rushmore.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/6-northcarolina.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/7-pyramids.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/8-spaceneedle.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/9-stonehenge.jpg"
];

class ProjectSix extends Component {
  render() {
    const mainText = (
      "What happens when digital information is removed an image? Does the image define the place or does the place define the image? Missing Monuments is a series of found images from famous destinations around the world. Using photoshop's select and replace tool each attraction was removed from the picture. "
    );

    const subText = (
      "Photoshop"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="6"
            next="/project-seven"
            last="/project-five"
            title="Missing monuments"
            subTitle="Found Image Series"
            mainText={mainText}
            subText={subText}
            images={images}
            />
        </div>
      </div>
    );
  }
}

export default ProjectSix;

import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectSix extends Component {
  render() {
    const mainText = (
      "A series of found images from famous destinations around the world. Using photoshops select/replace tool each attraction was removed from the picture."
    );

    const subText = (
      "..."
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-one"
            last="/project-five"
            title="Missing monuments"
            subTitle="subtitle"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/1-newyork.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/2-oklahoma.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/3-massachusetts.jpg"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/4-maryland.jpg"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/5-rushmore.jpg"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/6-northcarolina.jpg"
            seventhImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/7-pyramids.jpg"
            eighthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/8-spaceneedle.jpg"
            ninthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/missing/9-stonehenge.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectSix;

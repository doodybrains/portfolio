import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectFive extends Component {
  render() {
    const mainText = (
      "A series of photographs of one person’s skin taken while they browsed the resulting websites listed under the most popular Google searches at the time. The pictures were taken with the intention of finding patterns through the color of light in order to signify some sort of deeper understanding into the physicality of what many internet users were looking at."
    );

    const subText = (
      "Digital Camera"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-six"
            last="/project-four"
            title="We're all on the internet together"
            subTitle="Photography Series"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/1-what.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/2-is.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/3-love.jpg"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/4-where.jpg"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/5-is.jpg"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/internet-light/6-chuck-norris.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectFive;

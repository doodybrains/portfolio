import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectFive extends Component {
  render() {
    const mainText = (
      "A series of photographs taken of skin while in front of web page results for the most popular google searches."
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
            title="What does the internet look like?"
            subTitle="What do I look like?"
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

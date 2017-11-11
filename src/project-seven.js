import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

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
            next="/project-one"
            last="/project-six"
            title="Mixtape + Are.na API"
            subTitle="subtitle"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-1.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-2.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-3.jpg"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-4.jpg"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-5.jpg"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-6.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectSeven;

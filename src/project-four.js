import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectFour extends Component {
  render() {
    const mainText = (
      "Videos of constructions sites in NYC collected between 2016 and the present. Videos are randomized as is the overlaying text which is pulled from my own research into the physicality of the internet. What does the internet look like? What structures are necessary for it to work? How much energy, time, and space does the internet require? Construction in NYC seems to be endless, highly visible, yet vapid. Construction of the internet seems to be infinite, invisible, yet extremeley pervasive. Sound is an original track mixed by "
    );

    const subText = (
      "iPhone, Vimeo, React"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-five"
            last="/project-three"
            title="Construction Site"
            subTitle=""
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-1.png"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-2.png"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-3.png"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-4.png"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-5.png"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/construction-6.png"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectFour;

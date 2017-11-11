import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectFour extends Component {
  render() {
    const mainText = (
      "Videos of constructions sites in NYC collected since 2016. Videos are randomized as is the overlaying texts which are pulled from my research into the physicality of the internet. What does the internet look like? What structures are necessary for it to work? How much energy, time, and space does the internet require? Construction in NYC is highly visible and seemingly endless. Construction of the internet seems to be infinite, invisible, yet extremeley pervasive."
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
            subTitle="single page website"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-1.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-2.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-3.jpg"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-4.jpg"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-11.jpg"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-6.jpg"
            seventhImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-7.jpg"
            eigthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-8.jpg"
            ninthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-9.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectFour;

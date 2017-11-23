import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-1.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-2.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-3.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-4.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-11.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-6.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-7.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-8.jpg",
"https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/cons-9.jpg"
];

class ProjectFour extends Component {
  render() {
    const mainText = (
      "This website displays a collection videos taken of constructions sites in NYC. Most of the videos were taken between 2015 and the present. The overlaying texts, pulled from my research into the physicality of the internet, are displayed at random. What does the internet look like? What structures are necessary for it to work? How much energy, time, and space does the internet require? Construction in NYC is highly visible and seemingly endless. Construction of the internet is infinite, pervasive, yet seemingly invisible."
    );

    const subText = (
      "iPhone, Vimeo, React"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="4"
            next="/project-five"
            last="/project-three"
            title="Construction Site"
            subTitle="single page website"
            mainText={mainText}
            subText={subText}
            images={images}
            link="https://goldsmith-ingrid-64253.netlify.com/"
            />
        </div>
      </div>
    );
  }
}

export default ProjectFour;

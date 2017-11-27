import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-1.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-2.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-4.jpg",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/mix-5.jpg"
];

class ProjectSeven extends Component {
  render() {
    const mainText = (
      "Mixtape is an app for sharing music and is built with React and the are.na API. Using are.na as a back-end users can upload mp3s from around the world wide web to make mixes of songs that might not be available on larger streaming services. The name of the are.na channel can be added to the end of the app's url so that the songs from the channel can get dynamically loaded into page."
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
            github="https://github.com/doodybrains/mixxxtape"
            />
        </div>
      </div>
    );
  }
}

export default ProjectSeven;

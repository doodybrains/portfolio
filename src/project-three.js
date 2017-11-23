import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';
const images = [
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/know-2.png",
  "https://s3-us-west-1.amazonaws.com/marceldochamp.net/know-1.png"
];

class ProjectThree extends Component {
  render() {
    const mainText = (
      "An experimental website where visitors can draw portraits of themselves. There is no option to save or erase, forcing the user to stay focused on the present, to take time in looking at themselves!"
    );

    const subText = (
      "Paper.js, Node.js, Express"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            id="3"
            next="/project-four"
            last="/project-two"
            title="Know Thyself"
            subTitle="Single page website"
            mainText={mainText}
            subText={subText}
            images={images}
            link="https://sleepy-everglades-99417.herokuapp.com/"
            />
        </div>
      </div>
    );
  }
}

export default ProjectThree;

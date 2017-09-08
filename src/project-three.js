import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectThree extends Component {
  render() {
    const mainText = (
      "An experimental website in which visitors can draw portraits of themselves. There is no options to save or erase, forcing the user to stay focused on the present, to look at themselves."
    );

    const subText = (
      "Paper.js, Node.js, Express"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-four"
            last="/project-two"
            title="Know Thyself"
            subTitle=""
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/knowthyself-1.png"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/knowthyself-2.png"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectThree;

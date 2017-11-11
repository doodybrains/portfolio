import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectTwo extends Component {
  render() {
    const mainText = (
      "Inpsired by Robert Morris's 1961 piece titled Box with the Sound of Its Own Making. While Morris's piece is three and a half hours, the amount of time it took him to build a wooden box, this piece is only 1 minute and 54 seconds, the amount of time it took me to build a web page."
    );

    const subText = (
      "HTML, CSS"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-three"
            last="/project-one"
            title="Website with the Sound of Its Own Making"
            subTitle="Single page website"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/www-1.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/www-2.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/www-3.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectTwo;

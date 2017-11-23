import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class Home extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="home">
          <SplitScreen
            homeComponent
            next="/project-one"
            last=""
            title="Portfolio"
            subTitle="Emma Rae Norton"
            mainText="This portfolio consists of 7 projects. Click the arrow on the right to go to the first project. From the first project you can use the left and right arrows on the top of the page to cycle through each project. While all pieces in the portfolio include reference images I have also provided links for projects that have their own websites."
            subText="This portfolio website and all external links should be viewed with the Google Chrome browser on a laptop or a desktop computer."
            />
        </div>
      </div>
    );
  }
}

export default Home;

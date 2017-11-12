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
            mainText="7 projects"
            subText="This website and all links are should be viewed with the Google Chrome browser on a laptop or desktop computer."
            />
        </div>
      </div>
    );
  }
}

export default Home;

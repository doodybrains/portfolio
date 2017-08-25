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
            mainText="10 projects"
            subText="Best viewed in Google Chrome browser on desktop"
            mainImage=""
            secondImage=""
            thirdImage=""
            link=""
            />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './app.css';
import SplitScreen from './split-screen.js';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="home">
          <SplitScreen
            title="Portfolio"
            subTitle="Emma Rae Norton"
            mainText="10 projects, best viewed in Google Chrome browser on desktop"
            secondText=""
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

export default App;

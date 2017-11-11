import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectOne extends Component {
  render() {
    const mainText = (
      "undecided.js is a command line tool for building single page websites. Built on top of Node.js the program can be installed through NPM. Each user's website, along with the links included, is automatically uploaded to the undecided.js website. The intention behind the tool is to bring common web development tools accessible to a non-programmer while also proving a an alternative platform for sharing information without the interference of algorithms or advertisements."
    );

    const subText = (
      "Node.js, NPM, Amazon s3, Heroku, Express"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-two"
            last="/"
            title="undecided.js / the internet is ur oyster"
            subTitle="command line tool"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-1.jpg"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-2.jpg"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-3.jpg"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-4.jpg"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-5.jpg"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-6.jpg"
            seventhImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-7.jpg"
            eigthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-8.jpg"
            ninthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/final/un-9.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectOne;

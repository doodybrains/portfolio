import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectOne extends Component {
  render() {
    const mainText = (
      "undecided.js is a tool for making web pages. any1 can easily create a personal web page while also participating in a community of sharing without algorithms or advertisements. by typing just 1 word (undecided) and 1 number (the amount of links u want to show) u can create a live web page containing any and every link u can think of. u can link to ur favorite website, a PDF, ur aunts blog, a fake news article, a real news article...anything! the internet is ur oyster. in addition to receiving a url for ur personal page all of ur links will be posted to the undecided homepage where u can scroll through the links posted by other undecided.js users"
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
            title="undecided.js"
            subTitle="(the internet is ur oyster)"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/step-1.png"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/step-2.png"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/step-3.png"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/lit-website.png"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/example-boring-website.png"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/undecided-home.png"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectOne;

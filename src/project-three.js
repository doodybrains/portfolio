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
            mainImage="https://scontent.cdninstagram.com/t51.2885-15/e35/12729485_968609883174596_620080932_n.jpg?ig_cache_key=MTE4MjcxOTY3ODk1MDQxMzcxMw%3D%3D.2.c"
            secondImage="https://scontent.cdninstagram.com/hphotos-xta1/l/t51.2885-15/e35/12357331_754568181313700_49107211_n.jpg"
            thirdImage="https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12394091_1686795284898209_597669179_n.jpg"
            fourthImage="https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/sh0.08/e35/12393681_1660534804215045_1584795024_n.jpg"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectThree;

import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectFour extends Component {
  render() {
    const mainText = (
      "Videos of constructions sites in NYC collected between 2016 and the present. Videos are randomized as is the overlaying text which is pulled from my own research into the physicality of the internet. What does the internet look like? What structures are necessary for it to work? How much energy, time, and space does the internet require? Construction in NYC seems to be endless, highly visible, yet vapid. Construction of the internet seems to be infinite, invisible, yet extremeley pervasive. Sound is an original track mixed by "
    );

    const subText = (
      "iPhone, Vimeo, React"
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-five"
            last="/project-three"
            title="Deep Construction"
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

export default ProjectFour;

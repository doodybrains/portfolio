import React, { Component } from 'react';
import './App.css';
import SplitScreen from './split-screen.js';

class ProjectSeven extends Component {
  render() {
    const mainText = (
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tristique ex, sed mattis tortor. Fusce mi risus, tristique vitae est ut, hendrerit auctor nunc. Mauris sit amet posuere velit, et imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin et nisl lorem. Vivamus fermentum ex in urna suscipit varius. Fusce arcu quam, interdum vitae egestas id, volutpat id est. Curabitur ultrices ac purus dapibus tristique. In tincidunt nulla eget consectetur tincidunt. Maecenas lorem nisi, elementum sed gravida in, tincidunt eu augue. Nam suscipit eleifend orci volutpat blandit. Nullam massa ante, pellentesque nec orci eget, aliquam dignissim sem. Duis nulla est, commodo sit amet enim vitae, varius dictum ipsum. Etiam in congue magna. Praesent venenatis porttitor fringilla. Pellentesque commodo felis a metus rutrum, quis placerat erat sagittis. Pellentesque ac arcu nec purus laoreet rutrum."
    );

    const subText = (
      "Maecenas fringilla risus nec neque dapibus facilisis. Quisque a sem ac nisl mollis commodo ac vitae nulla. Nullam id eleifend lectus. Duis in mi vehicula, pharetra urna vel, aliquet dolor. Praesent sem velit, viverra non ultrices vitae, commodo et tellus. Pellentesque vel risus mauris. Duis eros velit, aliquam eget quam in, auctor molestie elit. Suspendisse ac odio enim. Sed rutrum lectus et orci auctor ultricies. In aliquam metus at quam sagittis, ac maximus arcu porta. Vivamus faucibus lacus quis mauris tincidunt tristique. Mauris tristique iaculis ante non egestas. Sed at scelerisque magna. Curabitur sagittis arcu et turpis vulputate ultrices. Mauris hendrerit id arcu quis sagittis. Vivamus molestie eros quam, nec vehicula ligula pretium vitae. Maecenas mattis rhoncus erat, in porta tellus tempus quis. Nulla vel felis ut purus venenatis imperdiet a vitae enim. Praesent a eros arcu."
    );

    return (
      <div className="app-wrapper">
        <div className="project">
          <SplitScreen
            next="/project-one"
            last="/project-six"
            title="Mixtape + Are.na API"
            subTitle="subtitle"
            mainText={mainText}
            subText={subText}
            mainImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-1.png"
            secondImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-2.png"
            thirdImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-3.png"
            fourthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-4.png"
            fifthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-5.png"
            sixthImage="https://s3-us-west-1.amazonaws.com/marceldochamp.net/mixtape-6.png"
            link=""
            />
        </div>
      </div>
    );
  }
}

export default ProjectSeven;

import React, { Component } from 'react';
import './split-screen.css';
import {Link} from 'react-router-dom';

class SplitScreen extends Component {
  render() {
    return (
      <div className="split-wrapper">
        <div className="left-container">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <p>{this.props.mainText}</p>
          <p>{this.props.subText}</p>
        </div>

        <div className="right-container">
          {this.props.homeComponent &&
            <Link className="start" to={this.props.next}>
              <img className="arrow" src="https://icon.now.sh/chevronRight"/>
            </Link>
          }

          {!this.props.homeComponent &&
            <div className="wrapper">
              <Link className="back" to={this.props.last}>
                <img className="arrow" src="https://icon.now.sh/chevronLeft"/>
              </Link>

              {this.props.next &&
                <Link className="next" to={this.props.next}>
                  <img className="arrow" src="https://icon.now.sh/chevronRight"/>
                </Link>
              }

              <img src={this.props.mainImage}/>
              <img src={this.props.secondImage}/>
              <img src={this.props.thirdImage}/>
              <img src={this.props.fourthImage}/>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default SplitScreen;

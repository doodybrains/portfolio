import React, { Component } from 'react';
import './split-screen.css';
import {Link} from 'react-router-dom';
import left from './chevronLeft.svg';
import right from './chevronRight.svg';

class SplitScreen extends Component {
  render() {
    return (
      <div className="split-wrapper">
        <div className="left-container">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <p className="main-text">{this.props.mainText}</p>
          <p className="tools"><span>Tools:</span> {this.props.subText}</p>
        </div>

        <div className="right-container">
          {
            !this.props.homeComponent &&

            <div className="project-link">
              {this.props.link &&
                <span>
                  <a target="_blank" href={this.props.link}>Link to Project Homepage</a>
                  <p>{this.props.id} of 7</p>
                </span>
              }

              {!this.props.link &&
                <p className="counter-only">{this.props.id} of 7</p>
              }

            </div>
          }

          {this.props.homeComponent &&
            <Link className="start" to={this.props.next}>
              <div className="wrapper">
                <img alt="next" className="arrow" src={right}/>
                <p className="start">start</p>
              </div>
            </Link>
          }

          {!this.props.homeComponent &&
            <div className="wrapper">
              <Link className="back" to={this.props.last}>
                <img alt="previous" className="arrow" src={left}/>
              </Link>

              {this.props.next &&
                <Link className="next" to={this.props.next}>
                  <img alt="next" className="arrow" src={right}/>
                </Link>
              }

            {this.props.images.map(img => {
              return (
                <img alt="project" src={img} />
              );
            })}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default SplitScreen;

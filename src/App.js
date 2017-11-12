import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import ProjectOne from './project-one';
import ProjectTwo from './project-two';
import ProjectThree from './project-three';
import ProjectFour from './project-four';
import ProjectFive from './project-five';
import ProjectSix from './project-six';
import ProjectSeven from './project-seven';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/project-one" component={ProjectOne} />
      <Route path="/project-two" component={ProjectTwo} />
      <Route path="/project-three" component={ProjectThree} />
      <Route path="/project-four" component={ProjectFour} />
      <Route path="/project-five" component={ProjectFive} />
      <Route path="/project-six" component={ProjectSix} />
      <Route path="/project-seven" component={ProjectSeven} />
    </div>
  </Router>
);


export default App;

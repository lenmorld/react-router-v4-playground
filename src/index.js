import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoApp from './video_app/app.js';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


/*
(
  <VideoApp />
)
*/

const Home = () => (
  <h1>Home</h1>
)

const Contact =() => (
  <h1>Contact</h1>
)

const Always =() => (
  <h1>This Always Renders</h1>
)

/*
<Route path='/video' component={VideoApp}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>
*/

const Main = () => (
  <div>
    <ul>
      <li><Link to="/video">VideoApp</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    <hr />

    <Route path='/' component={Home}/>
    <Route path='/video' component={VideoApp}/>
    <Route path='/contact' component={Contact}/>
    <Route component={Always}/>
  </div>
)

const Root = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.querySelector('.container'));

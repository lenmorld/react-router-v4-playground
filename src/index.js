import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './video_app/app.js';

const Root = () => (
  <App />
)

ReactDOM.render(<Root />, document.querySelector('.container'));

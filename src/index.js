// Core modules
import React from 'react';
import ReactDOM from 'react-dom';
// Css
import '../css/style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// React Redux components
import App from './components/app';
import Root from './store/root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);

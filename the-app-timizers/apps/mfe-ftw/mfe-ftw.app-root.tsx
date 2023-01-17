import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MfeFtwApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <MfeFtwApp />
  </BrowserRouter>
), document.getElementById('root'));


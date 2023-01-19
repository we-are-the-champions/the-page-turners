import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChampionsApp } from './app';

ReactDOM.render(
  <BrowserRouter>
    <ChampionsApp />
  </BrowserRouter>,
  document.getElementById('root')
);

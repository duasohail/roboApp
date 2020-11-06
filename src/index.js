import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './component/card';
import Cardlist from './component/cardlist';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import {robots} from './component/4.2 robots.js';

ReactDOM.render(
  <div className="row justify-content-center align-items-center">
    <Cardlist robots={robots}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

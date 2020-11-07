import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './component/App';
import {robots} from './component/4.2 robots.js';


ReactDOM.render(
  <div className="row justify-content-center bg-dark align-items-center">
    <div className="tc bg-dark col-12 shadow mb-4">
      <h1 className="pb-3 pt-3 light-green" >ROBOFRIENDS</h1>
    </div>
   <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

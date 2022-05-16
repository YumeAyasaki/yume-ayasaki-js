import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.querySelector("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// __   __                          _                         _    _
// \ \ / _   _ _ __ ___   ___      / \  _   _  __ _ ___  __ _| | _(_)
//  \ V | | | | '_ ` _ \ / _      / _ \| | | |/ _` / __|/ _` | |/ | |
//   | || |_| | | | | | |  __    / ___ | |_| | (_| \__ | (_| |   <| |
//   |_| \__,_|_| |_| |_|\___   /_/   \_\__, |\__,_|___/\__,_|_|\_|_|
//                                      |___/

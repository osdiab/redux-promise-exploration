import React from 'react';

import logo from './logo.svg';
import './App.css';

export default function App({ synchronous, asynchronous }) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to my app!</h2>
      </div>
      <p>
        <button onClick={synchronous}>synchronous</button>
        <button onClick={asynchronous}>asynchronous</button>
      </p>
    </div>
  );
}

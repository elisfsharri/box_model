import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='ttu f-headline lh-solid tc-l times blue'>box model</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
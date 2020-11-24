import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Boxroom from './boxroom ';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='ttu f-headline lh-solid tc-l times blue'>box model</h1>
    <Boxroom />
  </React.StrictMode>,
  document.getElementById('root')
);

/* If you want to start measuring performance in your app,
 pass a function to log results
 (for example: reportWebVitals(console.log))
 or send to an analytics endpoint.
Learn more: https://bit.ly/CRA-vitals  */
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Boxroom from './boxroom';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='ttu f-headline lh-solid tc-l times blue'>box model</h1>
    <Boxroom />
  </React.StrictMode>,
  document.getElementById('root')
);
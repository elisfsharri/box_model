import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoxRoom from './BoxRoom';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='ttu f-headline lh-solid tc-l times blue'>box model</h1>
    <BoxRoom />
  </React.StrictMode>,
  document.getElementById('root')
);
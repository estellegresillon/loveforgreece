import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/app';

const options = { method: 'GET', mode: 'no-cors' };

setInterval(function() {
  fetch(`http://santorini.estellegresillon.fr`, options)
}, 300000);

ReactDOM.render(<App />, document.getElementById('root'));

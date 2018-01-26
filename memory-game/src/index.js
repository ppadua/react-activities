import React from 'react';
import ReactDOM from 'react-dom';
import HelloDojo from './App';
import registerServiceWorker from './registerServiceWorker';
var FontAwesome = require('react-fontawesome');


ReactDOM.render(<HelloDojo />, document.getElementById('todo'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import HelloDojo from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<HelloDojo />, document.getElementById('todo'));

registerServiceWorker();

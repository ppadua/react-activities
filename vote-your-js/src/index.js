import React from 'react';
import ReactDOM from 'react-dom';
import VoteJS from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<VoteJS />, document.getElementById('wrapper'));

registerServiceWorker();

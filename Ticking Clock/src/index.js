import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl from './App';
import LeftContent from './LeftContent';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<LoginControl />, document.getElementById('registration'));
ReactDOM.render(<LeftContent />, document.getElementById('left_content'));
registerServiceWorker();


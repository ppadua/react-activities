import React from 'react';
import ReactDOM from 'react-dom';
import ClockTicking from './App';
import registerServiceWorker from './registerServiceWorker';


setInterval(function(){
    ReactDOM.render(<ClockTicking />, document.getElementById('clock'));
}, 1000)
registerServiceWorker();

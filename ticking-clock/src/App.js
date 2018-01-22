import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

class ClockTicking extends Component {
	render() {
		var event = new Date();

		return (
			<h1>The time is: {event.toLocaleTimeString('en-US')}</h1>
		);
	}
}
export default ClockTicking;

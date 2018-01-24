import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

class LoginControl extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gender: 0,
			first_name: '',
			last_name: '',
			email_address: '',
			password: '',
			month: 'Jan',
			day: '1',
			year: '1'
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputSubmit = this.handleInputSubmit.bind(this);
	}

	handleInputChange(event) {
		console.log(event)
		const target = event.target;
		const value =  target.value;
		const name = target.name;
		console.log(target)
		console.log(value)

		this.setState({
			[name]: value
		});
	}
	handleClick(event) {
		console.log(event)
		const target = event.target;
		const value =  target.value;
		const name = target.name;
		console.log(target)
		console.log(value)

	}

	handleInputSubmit(event) {
		event.preventDefault();

		console.log(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleInputSubmit}>
				<input name="first_name" type="text" value={this.state.first_name} onClick={this.handleClick} placeholder="First Name"/>
				<input name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange} placeholder="Last Name"/>
				<input name="email_address" type="text" value={this.state.email_address} onChange={this.handleInputChange} placeholder="Mobile number or email" />
				<input name="password" type="text" value={this.state.password} onChange={this.handleInputChange} placeholder="New Password" />
				<div id="user_birthday">
					<span>Birthday</span>
					<select name="selected_month"  onChange={this.handleInputChange}>
						<option value="jan">Jan</option>
						<option value="feb">Feb</option>
						<option value="mar">Mar</option>
						<option value="apr">Apr</option>
					</select>
					<select name="selected_day"  onChange={this.handleInputChange}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<select name="selected_year" onChange={this.handleInputChange}>
						<option value="1990">1990</option>
						<option value="1991">1991</option>
						<option value="1992">1992</option>
						<option value="1993">1993</option>
					</select>
					<a href="">Why do I need to provide my birthday?</a>
				</div>
				<div id="user_gender">
					<input type="radio" name="gender" value="1" onChange={this.handleInputChange}/>
					<span>Female</span>
					<input type="radio" name="gender" value="2" onChange={this.handleInputChange}/>
					<span>Male</span>
				</div>
				<span>By clicking Create Account, you agree to our <a href="">Terms</a> and that you have read our <a href="">Data Policy</a>, including our <a href="">Cookie Use</a>. You may receive SMS Notifications from Facebook and can opt out at any time.</span>
				<input type="submit" value="Create Account" />
			</form>
		);
	}
}
export default LoginControl;

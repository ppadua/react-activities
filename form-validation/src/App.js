import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';


class Todo extends Component {
	constructor(props) {
		super(props);
		this.counter_index = 1;
		this.state = {
			name : "",
			email : "",
			validName : false,
			validEmail : false,
			is_submit : false
		}

		this.handleUserInput = this.handleUserInput.bind(this)
		this.handleSubmittion = this.handleSubmittion.bind(this)
	}

	handleUserInput(event){
		var state = this.state;
		var name = event.target.name;
  		var value = event.target.value;

		switch (name) {
			case "name":state.validName = (value.length > 8) ? true : false;
			break;
			case "email": state.validEmail =	(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) ?  true : false;
			break;
		}

		this.setState({[name]: value})
	}

	handleSubmittion(event){
		var state = this.state;
		event.preventDefault();
		if(this.state.validName && this.state.validEmail)
			state.is_submit = true

		this.setState(state)
	}

	render() {
		return (
			<div>
				<h1>Validation Form</h1>
			{!this.state.is_submit ?
				<form action="" onSubmit={this.handleSubmittion}>
				<label htmlFor="">
					<input type="text" value={this.state.name} name="name" onChange={this.handleUserInput} placeholder="Name" />
					<span className="error_message">{!this.state.validName ? "should be atleast 8 characters" : ""}</span>
				</label>
				<label htmlFor="">
					<input type="email" value={this.state.email}  name="email" onChange={(event) => this.handleUserInput(event)} placeholder="Email"/>
					<span className="error_message">{!this.state.validEmail ? "should be a valid email address" : ""}</span>
				</label>
				{this.state.validEmail && this.state.validName ? <input type="submit"/> : <input disabled="disabled" type="submit"/>}
				</form>
			:
				<span>Thank You!</span>
			}
			</div>
		);


	}
}

export default Todo;

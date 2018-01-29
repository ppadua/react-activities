import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

function minToHours( min ) {
	var hours = Math.floor(min/ 60) < 10 ? "0"+Math.floor(min/ 60) : Math.floor(min/ 60) ;
  	var minutes = min % 60 < 10 ? "0"+ min % 60 : min % 60 ;

	return hours + ":" + minutes;
}

function sum(numbers) {
	return numbers.reduce(function(a,b) {
		return a + b
	});
}

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					type : "personal",
					description: "personal",
					minutes: 100
				},
				{
					type : "personal",
					description: "personal",
					minutes: 20
				},
				{
					type : "work",
					description: "work",
					minutes: 30
				}
			],
			type :"personal",
			description : "",
			minutes : 0,
		}

		this.showRecord = this.showRecord.bind(this);
		this.filterLog = this.filterLog.bind(this);
		this.showOverallTime = this.showOverallTime.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	showRecord(project_type){
		return this.filterLog(project_type.name).map((props, index) =>
			<li key={index}>
				<span className="minutes">{minToHours(props.minutes)}</span>
				<span className="description">{props.description}</span>
			</li>
		)
	}

	showOverallTime(project_type){
		return 	minToHours(sum(this.filterLog(project_type.name).map((props) => props.minutes)));
	}

	filterLog(project_type){
		return this.state.items.filter(function (log) {
			switch (project_type) {
				case "work":
					return log.type === "work";
				default:
					return log.type === "personal";
			}
		}, this);
	}

	handleChange(event){
		event.preventDefault();
		var name = event.target.name;
  		var value = event.target.value;
		this.setState({[name]: value})
	}

	handleSubmittion(event){
		var state = this.state;
		event.preventDefault();

		state.items.push({
			type : state.type,
			description : state.description,
			minutes : parseInt(state.minutes)
		});

		state.type = "personal";
		state.description = "";
		state.minutes = 0;

		this.setState(state)
	}

	render() {
		return (
			<div>
				<h1>Work Logger</h1>
				<form action="" onSubmit={(event) => this.handleSubmittion(event)}>
					<label htmlFor="">
						<span>Project</span>
						<select name="type" id="" onChange={this.handleChange} value={this.state.type}>
						 	<option value="personal">Personal</option>
						 	<option value="work">Work</option>
						</select>
					</label>
					<label htmlFor="">
						<span>Description</span>
						<input name="description" id="" onChange={this.handleChange} value={this.state.description} />
					</label>
					<label htmlFor="">
						<span>Minutes</span>
						<input type="number" name="minutes" onChange={this.handleChange} value={this.state.minutes} />
					</label>
					<input type="submit" value="add"/>
				</form>
				<div className="records">
					<div className="time">
						<span>Personal</span>
						<this.showOverallTime name="personal" />
					</div>
					<ul><this.showRecord name="personal" /></ul>
				</div>
				<div className="records">
					<div className="time">
						<span>Work</span>
						<this.showOverallTime name="work" />
					</div>
					<ul><this.showRecord name="work" /></ul>
				</div>
			</div>
		);
	}
}

export default Todo;

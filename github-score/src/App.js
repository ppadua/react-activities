import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';
var axios = require('axios');

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user : "",
			followers : 0,
			public_repos : 0,
			is_search : false,
	    }

		this.handleSubmit = this.handleSubmit.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.appendScore = this.appendScore.bind(this)
	}

	componentDidMount(title) {
	    if(title !== undefined){
	        axios.get('https://api.github.com/users/'+title)
			.then((result) => {
				this.setState({
					user:  this.state.user,
   					followers: result.data.followers,
   					public_repos: result.data.public_repos,
					is_search : true
   				});
			})
			.catch(err => {
			    console.log("error retrieving data", err)
			})
   		}
     }

	handleSubmit(event){
		event.preventDefault();
		this.componentDidMount(this.state.user);
	}

	handleChange(event){
		this.state.user = event.target.value;
		this.setState(this.state)
	}

	appendScore(props){
		var total_score = props.followers +props.public_repos;
		var message = "";

		if(total_score < 20)
			message = "Needs work";
		else if(total_score >= 20 && total_score <  50)
			message = "A decent start";
		else if(total_score >= 50 && total_score <  100)
			message = "Doing good!";
		else if(total_score >=  100 && total_score <  200)
			message = "Great job!";
		else
			message = "Github Elite!";

		if(props.is_search)
			return (<div id="score">
				<h1>Your Score: {total_score} </h1>
				<h2>{message}</h2>
			</div>)
		else
			return "";
	}

	render() {
		return (
			<div>
				<h1>GitHub Score</h1>
				<form action="" onSubmit={this.handleSubmit}>
					<span>Github Username:</span><input type="text" value={this.state.user} onChange={this.handleChange}/>
					<input type="submit" value="Calculate my Github Score"/>
				</form>
				<this.appendScore followers={this.state.followers} public_repos={this.state.public_repos} is_search={this.state.is_search}/>
			</div>
		);
	}
}

export default Todo;

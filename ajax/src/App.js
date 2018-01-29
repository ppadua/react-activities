import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';
var axios = require('axios');

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title : "",
			director : "",
			year : "",
			plot : ""
	    }

		this.handleSubmit = this.handleSubmit.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount(title) {
       // fetch the project name, once it retrieves resolve the promsie and update the state.
	    if(title !== undefined){
	        this.getProjectName(title).then(result => this.setState({
				director: result.data.Director,
				year: result.data.Year,
				plot: result.data.Plot,
				title:  this.state.title
			}))
   		}

	   this.setState(this.state);
     }

	getProjectName(search) {
	  // replace with whatever your api logic is.
	  return axios.get('http://www.omdbapi.com/?t='+search+'&apikey=a00f58f9');
	}

	handleSubmit(event){
		event.preventDefault();
		this.componentDidMount(this.state.title);
	}

	handleChange(event){
		this.state.title = event.target.value;

		this.setState(this.state)
	}
	
	render() {
		return (
			<div>
				<h1>Movie Data</h1>
				<form action="" onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.title} onChange={this.handleChange}/>
					<input type="submit" value="Search"/>
				</form>
				<div id="movie_info">
				<p>Year : {this.state.year}</p>
				<p>Director : {this.state.director}</p>
				<p>Plot : {this.state.plot}</p>
				</div>
			</div>
		);
	}
}

export default Todo;

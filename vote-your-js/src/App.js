import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';



class VoteJS extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
		        {
					key_index: 1,
		          	score: 0,
		          	name: "React"
		        },
		        {
					key_index: 2,
		          	score: 0,
		          	name: "Vue"
		        },
		        {
					key_index: 3,
		          	score: 0,
		          	name: "Angular"
		        },
		        {
					key_index: 4,
		          	score: 0,
		          	name: "Ember"
		        },
		    ]
		}

		this.handleVote = this.handleVote.bind(this);
	}

	handleVote(id){
		var state = this.state;
		var state_index = state.items.map(a => a.key_index).indexOf(id);
		state.items[state_index].score++

		this.setState(state);
	}


	PrepareItems(props){
		return <li key={props.key_index}>
		    <span className="score">{props.item.score}</span>
		    <span className="library_name">{props.item.name}</span>
		    <span className="add_vote" onClick={props.handleVote.bind(this, props.item.key_index)}> +</span>
		</li>
	}


	PrepareLibrary(library){
		var library = library.items;
		var items = [];
		var max_score = library[0];

		this.handleVote = this.handleVote.bind(this);
		//bubble sort
		for (var i = 0; i < library.length-1; i++) {
			for (var j = 0; j < library.length-1; j++){
				if(library[j+1].score > library[j].score){
					var temp_score = library[j+1];
					library[j+1] = library[j];
					library[j] = temp_score;
				}
			}
		}

		for (var i = 0; i < library.length; i++) {
			items.push(<this.PrepareItems key={library[i].key_index} item={library[i]} handleVote={this.handleVote} />);
		}

		return items;
	}

	render() {
		return (
			<div>
				<span>Vote your JS Library</span>
				<ul>{this.PrepareLibrary(this.state)}</ul>
			</div>
		);
	}
}

export default VoteJS;

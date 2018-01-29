import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.counter_index = 1;

		this.state = {
			item : []
		};


		this.handleClick = this.handleClick.bind(this);
		this.HandleIncrementDecrement = this.HandleIncrementDecrement.bind(this);
	}

	handleClick(event) {
		var counter = this.state;

		counter.item.push({
			counter_index : this.counter_index,
			counter_key : this.counter_index,
			counter_score : 0,
		});

		this.counter_index++;

		this.setState(counter)
	}

	prepareCounterBox(props){
		return <li key={props.item.counter_index} data-key-id={props.item.counter_key}>
			<span className="score">{props.item.counter_score}</span>
			<button onClick={props.HandleIncrementDecrement} value="1">Increment</button>
			<button onClick={props.HandleIncrementDecrement} value="2">Decrement</button>
		</li>
	}

	PrepareCounter(library){
		var library = library.item;
		var items = [];

		for (var i = 0; i < library.length; i++) {
			items.push(<this.prepareCounterBox key={library[i].counter_index} item={library[i]} HandleIncrementDecrement={this.HandleIncrementDecrement}/>);
		}

		return items;
	}

	HandleIncrementDecrement(event){
		var li_id = event.target.parentElement.getAttribute("data-key-id");
		var is_increment = event.target.value;
		var counter = this.state;
		var counter_index = counter.item.map(a => a.counter_key).indexOf(parseInt(li_id));

		if(is_increment == 1)
			counter.item[counter_index].counter_score++;
		else
			counter.item[counter_index].counter_score--;

		this.setState(counter)
	}

	render() {
		return(
			<div>
				<button onClick={this.handleClick}>Add Counter</button>
				<ul>{this.PrepareCounter(this.state)}</ul>
			</div>
		)
	}
}

export default Counter;

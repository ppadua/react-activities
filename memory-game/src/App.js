import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				0,1,0,1,0,0,1,0,0,1,0,0
			],
			is_flip : false,
			is_game_over : false,
			wrong_card_index : 0
		}

		this.showGame = this.showGame.bind(this)
		this.startGame = this.startGame.bind(this)
		this.selectedCard = this.selectedCard.bind(this)
	}

	startGame(){
		var new_items = this.state;
		new_items.is_flip = true;
		this.setState(new_items);

		setTimeout(() => {
			var new_items = this.state;
			new_items.is_flip = false;

			this.setState(new_items);
		}, 3000)
	}

	selectedCard(event){
		console.log(this.state)
		if(this.state.wrong_card_index != 2){
			if(event.target.getAttribute("value") === "true"){
				event.target.classList.add("selected_correct_card");
				event.target.classList.remove("correct_start_card");
			}
			else {
				event.target.classList.add("selected_wrong_card")
				var new_items = this.state;
				new_items.wrong_card_index++;

				this.setState(new_items);
			}
		}
		else{
			var new_items = this.state;
			new_items.is_game_over = true;

			this.setState(new_items);
		}
	}

	showGame(){
		console.log(this.state)
		return	<ul id="all_cards">
			{
				this.state.items.map(
					(props, i) =>
						<li className={"cards"+ (props === 1 && this.state.is_flip === true ? " correct_card" : "") +" "+ (props === 1 && this.state.is_flip === false && this.state.is_game_over === true ? 'correct_start_card' : "" )}
							key={i}
							value={props === 1 ? true : false }
							onClick={!this.state.is_flip && !this.state.is_game_over? this.selectedCard : undefined} >
						</li>
				)
			}
		</ul>
	}

	render() {
		return (
			<div>
				<this.showGame />
				<button onClick={this.startGame}>Start</button>
			</div>
		);
	}
}

export default Todo;

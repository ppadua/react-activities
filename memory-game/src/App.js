import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

function shuffle_cards(arra1) {
	var arra1 = [0,1,0,1,0,0,1,0,0,1,0,0];
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: shuffle_cards(),
			is_flip : false,
			is_game_over : false,
			is_game : false,
			timer : 0,
			wrong_card_index : 0,
			right_card_index : 0
		};

		this.showGame = this.showGame.bind(this)
		this.startGame = this.startGame.bind(this)
		this.selectedCard = this.selectedCard.bind(this)
		this.playAgain = this.playAgain.bind(this)
	}

	startGame(){
		var new_items = this.state;
		new_items.is_flip = true;
		this.setState(new_items);

		setTimeout(() => {
			var new_items = this.state;
			new_items.is_flip = false;
			new_items.is_game = true;

			this.setState(new_items);
		}, 3000)
	}

	selectedCard(event){
		var new_items = this.state;

		if(new_items.right_card_index != 4){
			if(event.target.getAttribute("value") === "true"){
				event.target.classList.add("selected_correct_card");
				event.target.classList.remove("start_card_correct");
				new_items.right_card_index++;

				if(this.state.right_card_index == 4)
					new_items.is_game_over = true;
			}
			else {
				var all_uncorrect_card = document.querySelectorAll("#all_cards .start_card_correct");

				new_items.wrong_card_index++;
				event.target.classList.add("selected_wrong_card")


				if(this.state.wrong_card_index == 2){
					for (var i = 0; i < all_uncorrect_card.length; i++) {
						all_uncorrect_card[i].classList.remove("start_card_correct")
						all_uncorrect_card[i].classList.add("correct_start_card")
					}

					new_items.is_game_over = true;
				}
			}
		}

		this.setState(new_items);
	}

	showGame(){
		return	<ul id="all_cards">
			{
				this.state.items.map(
					(props, i) =>
						<li className={"cards"+ (props === 1 && this.state.is_flip === true ? " correct_card" : "") +" "+ (props === 1 ? 'start_card_correct' : "" )}
							key={i}
							value={props === 1 ? true : false }
							onClick={this.state.is_game && !this.state.is_game_over? this.selectedCard : undefined} >
						</li>
				)
			}
		</ul>
	}

	playAgain(){
		this.state = {
			items: shuffle_cards(),
			is_flip : false,
			is_game_over : false,
			is_game : false,
			wrong_card_index : 0,
			right_card_index : 0
		};

		var all_uncorrect_card = document.querySelectorAll("#all_cards .selected_wrong_card");
		var all_correct_start_card = document.querySelectorAll("#all_cards .correct_start_card");

		for (var i = 0; i < all_uncorrect_card.length; i++) {
			all_uncorrect_card[i].classList.remove("selected_wrong_card")
		}

		for (var i = 0; i < all_correct_start_card.length; i++) {
			all_correct_start_card[i].classList.remove("correct_start_card")
		}

		this.setState(this.state);
		this.startGame();
	}

	render() {
		return (
			<div>
				<this.showGame />
				{!this.state.is_game ? <button onClick={this.startGame}>Start</button> : "" }
				{(this.state.is_game && !this.state.is_game_over ) ? "Guess the correct cells" : "" }
				{this.state.is_game_over? <button onClick={this.playAgain}>Play Again</button> : "" }
			</div>
		);
	}
}

export default Todo;

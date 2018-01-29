import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';
var FontAwesome = require('react-fontawesome');


class Todo extends Component {
	constructor(props) {
		super(props);
		this.counter_index = 1;

		this.state = {
			items: [
				{ id: 1, text: "Learn React", completed: true, is_edit : false },
				{ id: 2, text: "Build a todo app", completed: false, is_edit : false },
				{ id: 3, text: "Profit", completed: false, is_edit : false }
			],
			filter: 'all',
			completeAll: true,
			newTodoText: ''
		}

		this.showTodo = this.showTodo.bind(this);
		this.handleChange = this.updateNewTodoText.bind(this);
		this.updateNewTodoText = this.updateNewTodoText.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.prepareTodo = this.prepareTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.checkedUnchekedAll = this.checkedUnchekedAll.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
	}

	addTodo(text){
		text.preventDefault()

		if(this.state.newTodoText.trim() !== ""){
			var state = this.state;

			state.items.push({
				id : state.items.length + 1,
				text : this.state.newTodoText,
				completed : false
			});

			state.newTodoText = "";

			this.setState(state);
		}
	}

	updateTodo(todoId, status){
		var item = this.state.items;

		item[item.map(function(item) { return item.id; }).indexOf(todoId)].text = status.target.value;

		this.setState(item);
	}

	updateFilter(filter){
		var state = this.state;
		state.filter = filter;
		this.setState(state);
	}

	updateNewTodoText(text){
		this.setState({newTodoText: text.target.value});
	}

	handleEditText(todoId, event){
		var item = this.state.items;
		item[item.map(function(item) { return item.id; }).indexOf(todoId)].is_edit =  (event === "click" ? true : false);
		this.setState(item);
	}


	showTodo(){
		var item = this.state.items;
		// var li_append = [];
        //
		// for (var i = 0; i < item.length; i++) {
		// 	li_append.push(<this.prepareTodo items={item[i]} key={i}/>)
		// }

		// return li_append;

		var filterTodo = item.filter(function (todo) {
			switch (this.state.filter) {
				case "active":
					return !todo.completed;
				case "completed":
					return todo.completed;
				default:
					return true;
			}
		}, this);

		return	filterTodo.map((props) =>
			<li key={props.id} data-id={props.id}>
				<label htmlFor={"checked_"+props.id}>
					<FontAwesome className={props.completed ? "checked_green" : "checked_gray"}name='check-circle-o' size='2x'/>
					<input type="checkbox" name="completed" checked={props.completed} onChange={() => this.checkedTodo(props.id)} id={"checked_"+props.id} className="hidden" />
				</label>
				<span onDoubleClick={() => this.handleEditText(props.id, "click")} className={"unedited_todo"+ (props.completed ? ' strike' : '')+" "+(props.is_edit ? "hidden" : " ") }> {props.text}</span>
				<input className={(props.is_edit) ? "edited_input_todo" : "hidden"} type="text" value={props.text}  onMouseOut={() => this.handleEditText(props.id, "mouseout")} onChange={this.updateTodo.bind(this, props.id)}/>
				<span className="removetodo" onClick={() => this.removeTodo(props.id)}><FontAwesome name='times' size='lg'/></span>
			</li>
		);
	}

	removeTodo(todoId){
		var item = this.state.items;
	 	item.splice(item.map(function(item) { return item.id; }).indexOf(todoId), 1);
		this.setState(item);
	}

	checkedTodo(todoId){
		var item = this.state.items;
		var is_checked = item[item.map(function(item) { return item.id; }).indexOf(todoId)].completed;

		item[item.map(function(item) { return item.id; }).indexOf(todoId)].completed = (is_checked ? false : true);

		this.setState(item);
	}

	checkedUnchekedAll(event){
		this.state.items.map((props) => props.completed =( event.target.getAttribute("value")  === "true" ? true : false));
		this.state.completeAll = ( event.target.getAttribute("value") === "true") ? false : true;
		this.setState(this.state);
	}

	clearCompleted(){
		var item = this.state.items;

		var filterTodo = item.filter(function (todo) {
			return !todo.completed;
		}, this);

		this.state.items = filterTodo

		this.setState(item);
	}

	prepareTodo(props){
		// 	return (
		// 		<li key={props.items.id} data-id={props.items.id}>
		// 			<input type="checkbox" name="completed" checked={props.items.completed} onChange={this.checkedTodo}/>
		// 			<span onDoubleClick={() => this.handleEditText(props.items.id, "click")} className={"unedited_todo"+ (this.props.completed ? 'strike' : '')+" "+(props.items.is_edit ? "hidden" : " ") }> {props.items.text}</span>
		// 			<input className={(props.items.is_edit) ? "edited_input_todo" : "hidden"} type="text" value={props.items.text}  onMouseOut={() => this.handleEditText(props.items.id, "mouseout")} onChange={this.updateTodo.bind(this, props.items.id)}/>
		// 			<span onClick={() => this.removeTodo(props.items.id)}>x</span>
		// 		</li>
		// 	);
	}

	render() {
		return (
			<div>
				<form action="" onSubmit={this.addTodo}>
					<span onClick={this.checkedUnchekedAll}><FontAwesome className='super-crazy-colors'	name='angle-down' size='2x' value={this.state.completeAll} /></span>
					<input type="text" name="text" value={this.state.newTodoText} onChange={this.updateNewTodoText} placeholder="What needs to be done"/>
				</form>
				<ul id="todos">
					{this.showTodo()}
				</ul>
				<div>
					<span>{this.state.items.length} items left</span>
					<ul id="filter">
						<li onClick={() => this.updateFilter("all")} className={this.state.filter === "all" ? "active" : ""}>All</li>
						<li onClick={() => this.updateFilter("active")} className={this.state.filter === "active" ? "active" : ""}>Active</li>
						<li onClick={() => this.updateFilter("completed")} className={this.state.filter === "completed" ? "active" : ""}>Completed</li>
					</ul>
					<span className="clear_completed" onClick={this.clearCompleted}>Clear Completed</span>
				</div>
				<div>Double click to edit</div>
			</div>
		);


	}
}

export default Todo;

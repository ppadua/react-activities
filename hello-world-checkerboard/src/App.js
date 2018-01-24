import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';

// const Title = (props) => {
// 	// return React.createElement('h1', null, props.text);
// 	return <h1>{props.text}</h1>;
// }
// const App = (props) => {
// 	return React.createElement('div', null,
// 		<Title text={ 'Title one!'} />,
// 		<Title text={ 'Title one!'} />,
// 		<Title text={ 'Title one!'} />
// 	)
// }

function Row (props) {
	var cells = [];
	var table_row = [];

	for (var i = 0; i < 12; i++) {
	    for (var j = 1; j < 12; j++) {
	        if (i % 2 == j % 2) {
	            cells.push(<Cell key={ j+"_white"} style={{...styles.cell, ...styles.colorA}}/>);
	        }
			else {
				cells.push(<Cell key={ j+"_red"} style={{...styles.cell, ...styles.colorB}}/>);
	        }
	    }

		table_row.push(<tr key={i}>{cells}</tr>);

		cells = [];
	}

	return table_row;
}

function Cell(props) {
	return <td style={props.style}></td>;
}

function CheckerBoard (){
	return Row();
}

// And feel free to use the following object:
var styles = {
  row: {height: '20px'},
  cell: {height: '20px', width: '20px', display:'inline-block'},
  colorA: {backgroundColor: 'black'},
  colorB: {backgroundColor: 'red'}
}

class HelloDojo extends Component {
	render() {
		return ( <table><tbody><CheckerBoard /></tbody></table>);
	}
}

export default HelloDojo;

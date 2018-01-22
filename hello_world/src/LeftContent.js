import React, { Component } from 'react';
import './assets/css/index.css';
import newsfeed from './assets/images/newsfeed.png';
import link from './assets/images/link.png';
import share from './assets/images/share.png';

// function leftContent(props){
// 	var rows = [];

// 	rows.push(<h3 key={leftContentData.length}>Connect with friends and the world around you on Facebook.</h3>);

// 	for (var i = 0; i < leftContentData.length; i++) {
// 		rows.push(<div className="find_share_update_logo" key={i}>
// 			<img src={leftContentData[i].image_name} alt="" />
// 			<h5>{leftContentData[i].title}</h5>
// 			<span>{leftContentData[i].description}</span>
// 		</div>)
// 	}

// 	return rows;
// };

// const leftContentData = [
// 	{
// 		image_name : newsfeed,
// 		title : "See Photos and updates",
// 		description :"from friend in News Feed." 
// 	},
// 	{
// 		image_name : share,
// 		title :"Share what's new" ,
// 		description : "in your life on your Timeline" 
// 	},
// 	{
// 		image_name : link,
// 		title : "Find more",
// 		description : "of what you're looking for with facebook Search"
// 	}
// ]

class LeftContent extends Component {
	render() {
		// return (leftContent());

		return (
			[
				<h3 key={0}>Connect with friends and the world around you on Facebook.</h3>,
				<div className="find_share_update_logo" key={1}>
					<img src={newsfeed} alt="test" />
					<h5>See Photos and updates</h5>
					<span>from friend in News Feed.</span>
				</div>,
				<div className="find_share_update_logo" key={2}>
					<img src={share} alt="test" />
					<h5>Share what's new</h5>
					<span>in your life on your Timeline</span>
				</div>,
				<div className="find_share_update_logo" key={3}>
					<img src={link} alt="test" />
					<h5>Find more</h5>
					<span>of what you're looking for with facebook Search</span>
				</div>
			]
		);
	};
}

export default LeftContent;


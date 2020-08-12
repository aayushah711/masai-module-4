import React from 'react';
import List from './List.jsx';
import data from '../data.json';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				{data.map((list) => {
					return <List key={list.id} id={list.id} name={list.name} data={list.data} />;
				})}
			</div>
		);
	}
}
export default Board;

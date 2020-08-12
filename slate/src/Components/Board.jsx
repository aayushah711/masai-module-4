import React from 'react';
import List from './List.jsx';
import data from '../data.json';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		};
	}

	updateData = (id, name) => {
		const newData = this.state.data

		let obj = {
			id: Date.now(),
			name: name,
		};
		newData.map((item) => {
			if (item.id === id) {
				item.data.push(obj);
			}
		})

		this.setState({
			data: newData
		})
	}

	updateListName = (id, name) => {
		const newData = this.state.data
		newData.map((item) => {

			if (item.id === id) {
				item.name = name;
				item.id = Date.now();
			}

		})

		this.setState({
			data: newData
		}, () => console.log(this.state))
	}


	render() {
		const { data } = this.state;
		return (
			<div>
				{data.map((list) => {
					return <List key={list.id} id={list.id} name={list.name} data={list.data} updateData={this.updateData}
					updateListName={this.updateListName} />;
				})}
			</div>
		);
	}
}
export default Board;

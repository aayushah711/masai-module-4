import React from 'react';
import List from './List.jsx';
import data from '../data.json';
import Navbar from './Navbar.jsx';
import styled from 'styled-components';

const Scroll = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow-x: scroll;
	
	::-webkit-scrollbar {
    width: 0px;  
    background: transparent; 
	}

`;

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data.board1
		};
	}

	updateData = (id, name) => {
		const newData = this.state.data;

		let obj = {
			id: Date.now(),
			name: name
		};
		newData.map((item) => {
			if (item.id === id) {
				item.data.push(obj);
			}
			return item;
		});

		this.setState({
			data: newData
		});
	};

	updateListName = (id, name) => {
		const newData = this.state.data;
		newData.map((item) => {
			if (item.id === id) {
				item.name = name;
				item.id = Date.now();
			}
			return item;
		});

		this.setState(
			{
				data: newData
			},
			() => console.log(this.state)
		);
	};

	updateCardName = (listId, cardId, cardName) => {
		const newData = this.state.data;
		this.props.theme.toggleLight();
		newData.map((list) => {
			if (list.id === listId) {
				list.data.map((card) => {
					if (card.id === cardId) {
						card.name = cardName;
						card.id = Date.now();
					}
					return card;
				});
			}
			return list;
		});

		this.setState(
			{
				data: newData
			},
			() => console.log(this.state)
		);
	};

	addList = () => {
		console.log('adding list');
		const newData = this.state.data;
		const payload = {
			id: Date.now(),
			name: false,
			data: []
		};
		newData.push(payload);
		this.setState(
			{
				data: newData
			},
			() => console.log(this.state)
		);
	};

	deleteList = (id) => {
		const newData = this.state.data;
		newData.map((item, index) => {
			if (item.id === id) {
				delete newData[index];
			}
			return item;
		});

		this.setState(
			{
				data: newData
			},
			() => console.log(this.state)
		);
	};

	deleteCard = (listId, cardId) => {
		const newData = this.state.data;
		newData.map((list, listIndex) => {
			if (list.id === listId) {
				list.data.map((card, index) => {
					if (card.id === cardId) {
						delete newData[listIndex]['data'][index];
					}
					return card;
				});
			}
			return list;
		});

		this.setState(
			{
				data: newData
			},
			() => console.log(this.state)
		);
	};

	render() {
		const { data } = this.state;
		return (
			<div>
				<Navbar theme={this.props.theme} addList={this.addList} />
				<Scroll>
					{data.map((list) => {
						return (
							<List
								key={list.id}
								id={list.id}
								name={list.name ? list.name : ''}
								data={list.data}
								updateData={this.updateData}
								updateListName={this.updateListName}
								updateCardName={this.updateCardName}
								deleteList={this.deleteList}
								deleteCard={this.deleteCard}
								theme={this.props.theme}
								renameList={list.name ? false : true}
							/>
						);
					})}
				</Scroll>
			</div>
		);
	}
}
export default Board;

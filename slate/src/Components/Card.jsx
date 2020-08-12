import React, { Component } from 'react';
import styled from 'styled-components';

const ListCards = styled.div`
	flex: 1 1 auto;
	margin-bottom: 0;
	overflow-y: auto;
	overflow-x: hidden;
	margin: 0 4px;
	padding: 0 4px;
	z-index: 1;
	min-height: 0;
`;

const Pencil = styled.div`
	opacity: 0%;
	width: 400px;
	text-align: right;
	:hover {
		opacity: 100%;
		cursor: pointer;
	}
`;

const ListCard = styled.a`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
	display: block;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin-bottom: 8px;
	max-width: 300px;
	min-height: 20px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	cursor: pointer;
	padding: 10px;
`;

const RenameCard = styled.input`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
	cursor: pointer;
	display: block;
	margin-bottom: 8px;
	/* max-width: 300px; */
	min-height: 10px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 10px;
	width: 92%;
`;

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			renameCard: false,
			renamedCard: this.props.name
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleKeyDown = (e) => {
		const { name, renamedCard } = this.state;
		return e.key === 'Enter'
			? this.props.updateCardName(this.props.listId, this.props.id, renamedCard)
			: e.key === 'Escape' ? this.setState({ renameCard: false, renamedCard: name }) : null;
	};

	render() {
		const { renameCard, renamedCard, name } = this.state;
		const { handleChange, handleKeyDown } = this;
		console.log(renameCard);
		return (
			<ListCards>
				{renameCard ? (
					<RenameCard
						type="text"
						name="renamedCard"
						value={renamedCard}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
				) : (
					<ListCard>
						{name}
						<Pencil>
							<i
								className="fas fa-pencil-alt"
								onClick={() => {
									console.log('inside rename card');
									this.setState({ renameCard: true }, () => console.log('renaming'));
								}}
							/>
						</Pencil>
					</ListCard>
				)}
			</ListCards>
		);
	}
}

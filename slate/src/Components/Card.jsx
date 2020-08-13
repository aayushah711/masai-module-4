import React, { Component } from 'react';
import styled from 'styled-components';

const ListCards = styled.div`
	flex: 1 1 auto;
	margin-bottom: 0;
	/* overflow-y: auto;
	overflow-x: hidden; */
	margin: 0 4px;
	padding: 0 4px;
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
	cursor: pointer;
	padding: 10px;
`;

const RenameCard = styled.input`
	background-color: rgb(255, 255, 255);
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

const InputContainer = styled.div`position: relative;`;

const Options = styled.div`
	background: transparent;
	height: 100px;
	width: 200px;
	position: absolute;
	right: -208px;
	top: 0px;
	z-index: 2;
	/* border: red dashed; */
`;

const DeleteOption = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
	color: white;
	opacity: 100% !important;
	padding: 5px 10px;
	margin-bottom: 5px;
	border-radius: 3px;
	width: fit-content;
`;

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			renameCard: false,
			renamedCard: this.props.name,
			showOptions: true
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
		if (e.key === 'Enter') {
			this.props.updateCardName(this.props.listId, this.props.id, renamedCard);
		} else {
			if (e.key === 'Escape') {
				this.setState({ renameCard: false, renamedCard: name });
				this.props.theme.toggleLight();
			}
		}
	};

	render() {
		const { renameCard, renamedCard, name } = this.state;
		const { handleChange, handleKeyDown } = this;
		return (
			<ListCards>
				{renameCard ? (
					<InputContainer>
						<RenameCard
							type="text"
							name="renamedCard"
							value={renamedCard}
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						/>
						<Options>
							<DeleteOption>
								<span>
									<i
										class="far fa-trash-alt"
										style={{
											height: '100%',
											cursor: 'pointer',
											marginRight: '10px'
										}}
										onClick={() => {
											this.props.deleteCard(this.props.listId, this.props.id);
										}}
									/>
								</span>
								<span>Delete</span>
							</DeleteOption>
							<DeleteOption>
								<span>
									<i
										class="far fa-clock"
										style={{
											height: '100%',
											cursor: 'pointer',
											marginRight: '10px'
										}}
									/>
								</span>
								<span>Change Due date</span>
							</DeleteOption>
							<DeleteOption>
								<span>
									<i
										class="far fa-copy"
										style={{
											height: '100%',
											cursor: 'pointer',
											marginRight: '10px'
										}}
									/>
								</span>
								<span>Copy</span>
							</DeleteOption>
						</Options>
					</InputContainer>
				) : (
					<React.Fragment>
						<ListCard>
							{name}
							<Pencil>
								<i
									className="fas fa-pencil-alt"
									onClick={() => {
										console.log('inside rename card');
										this.props.theme.toggleDark();
										this.setState({ renameCard: true, showOptions: true }, () =>
											console.log('renaming')
										);
									}}
								/>
							</Pencil>
						</ListCard>
					</React.Fragment>
				)}
			</ListCards>
		);
	}
}

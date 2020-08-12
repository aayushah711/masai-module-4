import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.div`
	/* border: 1px solid black; */
	width: 272px;
	height: 100%;
	box-sizing: border-box;
	display: inline-block;
	vertical-align: top;
	white-space: nowrap;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue,
		sans-serif;
	font-size: 14px;
	line-height: 20px;
	font-weight: 400;
	margin: 10px;
	margin-right: 0px;
`;

const ListContainer = styled.div`
	/* border: 1px solid black; */
	background-color: #ebecf0;
	border-radius: 3px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	max-height: 100%;
	position: relative;
	white-space: normal;
`;
const ListHeader = styled.div`
	margin: 0px 8px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* :hover {
		opacity: 70%;
		cursor: pointer;
		background-color: #fff;
	} */
`;
const ListHeaderNameAssist = styled.h2`
	font-size: 20px;
	line-height: 4px;
	font-weight: 600;
	padding: 10px 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	// border: 1px solid black;
	margin-bottom: 12px;
	margin-top: 10px;
	cursor: pointer;
`;

const CardComposerContainer = styled.button`
	border: none;
	margin: 8px;
	background: #ebecf0;
	min-height: 38px;
	max-height: 38px;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;

	:hover {
		opacity: 70%;
		cursor: pointer;
		background-color: #fff;
	}
`;
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
const ListCard = styled.a`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
	cursor: pointer;
	display: block;
	margin-bottom: 8px;
	max-width: 300px;
	min-height: 20px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 10px;
`;

const ListAnotherCard = styled.input`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
	cursor: pointer;
	/* display: block; */
	width: 95%;
	min-height: 0px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 5px;
	font-size: 20px;
	line-height: 4px;
	font-weight: 600;
	margin: 4px 0;
	/* margin-top: 10px; */
	/* margin-bottom: 8px; */
`;

const addCancelCardWrapper = styled.button`
	border: 1px solid black;
	display: flex;
	flex-direction: row;
`;

const AddCardButton = styled.button`
	margin-left: 8px;
	width: 84px;
	height: 32px;
	margin-bottom: 8px;
	margin-right: 10px;
	background-color: #5aac44;
	color: white;
	border: none;
	font-weight: bold;
	:hover {
		opacity: 70%;
		cursor: pointer;
	}
`;

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			data: this.props.data,
			newCard: false,
			anotherCard: '',
			renameList: false,
			renamedList: this.props.name
		};
	}

	addCard = () => {
		const { newCard } = this.state;

		this.setState(
			{
				newCard: true
			},
			() => console.log(this.state)
		);
	};

	handleCancel = () => {
		this.setState({ newCard: false, anotherCard: '' });
	};

	handleSave = (event) => {
		console.log(this.state.anotherCard);
		this.props.updateData(this.props.id, this.state.anotherCard);
		this.setState({ anotherCard: '' });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleRename = (e) => {
		this.setState({ renameList: true });
	};

	handleSaveList = () => {
		this.props.updateListName(this.props.id, this.state.renamedList);
		this.setState({ renameList: false });
	};

	handleKeyDown = (e) => {
		const { name } = this.state;
		return e.key === 'Enter'
			? this.handleSaveList()
			: e.key === 'Escape' ? this.setState({ renameList: false, renamedList: name }) : null;
	};

	handleDeleteList = () => {
		this.props.deleteList(this.props.id);
	};

	render() {
		// console.log(this.state);
		const { newCard, data, name, anotherCard, renameList, renamedList } = this.state;
		const { handleChange, addCard, handleCancel, handleSave, handleRename, handleKeyDown, handleDeleteList } = this;
		return (
			<ListWrapper>
				<ListContainer>
					{renameList ? (
						<ListCards>
							<ListAnotherCard
								type="text"
								name="renamedList"
								value={renamedList}
								onChange={handleChange}
								onKeyDown={handleKeyDown}
							/>
						</ListCards>
					) : (
						<ListHeader onClick={handleRename}>
							<ListHeaderNameAssist>
								{name}
								{/* <span
									style={{ width: '50px', height: '50px', border: 'red dashed' }}
									onClick={handleDeleteList}
								>
									X
								</span> */}
							</ListHeaderNameAssist>
							<i
								class="fas fa-trash-alt"
								style={{
									width: '50px',
									height: '100%',
									cursor: 'pointer',
									textAlign: 'right',
									marginRight: '10px'
								}}
								onClick={handleDeleteList}
							/>
						</ListHeader>
					)}
					{data.map((card) => {
						return (
							<Card
								key={card.id}
								listId={this.props.id}
								id={card.id}
								name={card.name}
								updateCardName={this.props.updateCardName}
							/>
						);
					})}

					{newCard ? (
						<React.Fragment>
							<ListCards>
								<ListAnotherCard
									type="text"
									name="anotherCard"
									value={anotherCard}
									onChange={handleChange}
								/>
							</ListCards>
							<addCancelCardWrapper>
								<AddCardButton
									onClick={handleSave}
									style={{
										marginLeft: '8px',
										float: 'left',
										cursor: 'pointer'
									}}
								>
									Add Card
								</AddCardButton>

								<h1
									onClick={handleCancel}
									style={{
										float: 'left',
										margin: '2px 2px',
										fontWeight: 'normal',
										fontSize: '25px',
										cursor: 'pointer'
										// border: 'red dashed'
									}}
								>
									x
								</h1>
							</addCancelCardWrapper>
						</React.Fragment>
					) : (
						<CardComposerContainer onClick={addCard}>
							<i className="fa fa-plus" aria-hidden="true" />
							<span style={{ marginLeft: '10px', fontSize: '18px' }}>Add another card</span>
						</CardComposerContainer>
					)}
				</ListContainer>
			</ListWrapper>
		);
	}
}
export default List;

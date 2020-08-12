import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
	/* border: 1px solid black; */
	width: 272px;
	margin: 0 4px;
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
	margin-top: 20px;
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
	flex: 0 0 auto;
	// padding: 10px 8px;
	margin: 0px 8px;
	position: relative;
	// min-height: 20px;
	// margin-top: 15px;
`;
const ListHeaderNameAssist = styled.h2`
	font-size: 20px;
	line-height: 24px;
	font-weight: 600;
	// margin: 0 0 8px;
	margin-top: 10px;
	padding: 0px 10px;
	// border: 1px solid black;
`;

const ListHeaderName = styled.input`
	background: transparent;
    border-radius: 3px;
    box-shadow: none;
    font-weight: 600;
    margin: -4px 0;
    min-height: 20px;
    padding: 4px 8px;
    max-height: 256px;
	resize: none;
	overflow: hidden;
    overflow-wrap: break-word;
    height: 28px;
	width: 92%;
	margin-bottom: 10px;
	margin-top: 10px;
	font-size: 20px;
	line-height: 24px;
	font-weight: 600;
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
		cursor: pointer;
		background: #efeca0;
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
	display: block;
	margin-bottom: 8px;
	max-width: 300px;
	min-height: 20px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 10px;
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
			renamedList: this.props.name,
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
		this.setState({ newCard: false, anotherCard: "" });
	}

	handleSave = (event) => {
		console.log(this.state.anotherCard)
		this.props.updateData(this.props.id, this.state.anotherCard)
		this.setState({ anotherCard: "" })
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		});
	};

	handleRename = (e) => {
		this.setState({renameList: true});
	}

	handleSaveList = () => {
		this.props.updateListName(this.props.id, this.state.renamedList)
		this.setState({renameList: false});
	}

	handleKeyDown = (e) => {
		const { name } = this.state;
		return e.key === "Enter" ?  this.handleSaveList() : 
		e.key === "Escape" ? this.setState({ renameList: false, renamedList: name }) : null;
	}


	render() {
		// console.log(this.state);
		const { newCard, data, name, anotherCard, renameList, renamedList } = this.state;
		const { handleChange, addCard, handleCancel, handleSave, handleRename, handleKeyDown } = this;
		return (
			<ListWrapper>
				<ListContainer>
					{renameList ? 
						<ListHeader>
							<ListHeaderName 
									type="text" 
									name="renamedList"
									value={renamedList}
									onChange={handleChange}
									onKeyDown={handleKeyDown}
								/>
						</ListHeader> : 
						<ListHeader
							onClick={handleRename}>
							<ListHeaderNameAssist>{name}</ListHeaderNameAssist>
						</ListHeader>
					}
					{data.map((card) => {
						return (
							<ListCards key={card.id} id={card.id}>
								<ListCard>{card.name}</ListCard>
							</ListCards>
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
							<button onClick={handleSave}>Save</button>
							<button onClick={handleCancel}>Cancel</button>
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

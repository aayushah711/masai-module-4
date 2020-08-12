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
	position: relative;
	// min-height: 20px;
`;
const ListHeaderName = styled.h2`
	font-size: 20px;
	line-height: 24px;
	font-weight: 600;
	// margin: 0 0 8px;
	padding: 0px 10px;
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
			anotherCard: ''
		};
	}

	addCard = () => {
		console.log('adding card');
		console.log(this.props.id);
		const { newCard } = this.state;

		this.setState(
			{
				newCard: true
			},
			() => console.log(this.state)
		);

		// const { data } = this.state;
		// let obj = {
		// 	id: 'item5',
		// 	name: 'eggplant'
		// };
		// const newData = [ ...data ];
		// newData.push(obj);

		// this.setState(
		// 	{
		// 		data: newData
		// 	},
		// 	() => console.log(this.state)
		// );
	};

	handleChange = (e) => {
		this.setState({
			anotherCard: e.target.value
		});
	};

	render() {
		console.log(this.state);
		const { newCard, data, name, anotherCard } = this.state;
		return (
			<ListWrapper>
				<ListContainer>
					<ListHeader>
						<ListHeaderName>{name}</ListHeaderName>
					</ListHeader>
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
									onChange={this.handleChange}
								/>
							</ListCards>
							<button>Save</button>
							<button>Cancel</button>
						</React.Fragment>
					) : (
						<CardComposerContainer onClick={this.addCard}>
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

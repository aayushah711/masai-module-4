import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	// border: 1px solid black;
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	/* background-color: #2d7219; */
	background-color: rgb(45, 114, 25);
	padding: 5px;
`;

const LeftSection = styled.div`
	// border: 1px solid red;
	height: 32px;
	flex: 1;
	display: flex;
	justify-content: flex-start;
`;

const RightSection = styled.div`
	// border: 1px solid blue;
	height: 32px;
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

const SmallButton = styled.button`
	height: 32px;
	width: 32px;
	margin: 0px 2px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	/* background-color: #5aac44; */
	background-color: rgb(90, 172, 68);
	color: white;
	border: none;
	border-radius: 3px;
	outline: none;

	:hover {
		opacity: 70%;
		cursor: pointer;
	}
`;

const Logo = styled.a`
	display: block;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
	top: 10px;
	font-size: 25px;
	color: white;
	font-family: 'Lobster', cursive;
	letter-spacing: 2px;
	opacity: 70%;
	:hover {
		opacity: 100%;
		cursor: pointer;
	}
`;

const Avatar = styled.img`
	height: 32px;
	width: 32px;
	border-radius: 100%;
	margin: 0px 2px;
`;

const BoardButton = styled.button`
	height: 32px;
	width: 91px;
	margin: 0px 2px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #5aac44;
	background-color: rgb(90, 172, 68);
	color: white;
	border: none;
	border-radius: 3px;
	outline: none;
	:hover {
		opacity: 70%;
		cursor: pointer;
	}
`;

const SearchButton = styled.button`
	height: 32px;
	width: 180px;
	text-align: right;
	background-color: #5aac44;
	background-color: rgb(90, 172, 68);
	color: white;
	border: none;
	border-radius: 3px;
	margin-left: 2px;
	outline: none;
	:hover {
		opacity: 70%;
		cursor: pointer;
	}
	@media screen and (max-width: 760px) {
		height: 32px;
		width: 32px;
		background-color: #5aac44;
		color: white;
		border: none;
		border-radius: 3px;
		margin-left: 2px;
		text-align: center;
	}
`;

const ChangeColourContainer = styled.div`
	height: 400px;
	// width: 200px;
	background-color: white;
	position: relative;
	top: 41px;
	right: -105px;
	width: 272px;
	background-color: #ebecf0;
	border-radius: 3px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
	white-space: normal;
	z-index: 100;
`;

const ListCard = styled.a`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
	cursor: pointer;
	display: block;
	margin-bottom: 8px;
	max-width: 300px;
	min-height: 50px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 10px;
	margin: 10px;
`;

const ColorHeader = styled.div`
	background-color: transparent;
	border-radius: 3px;
	cursor: pointer;
	margin-bottom: 8px;
	max-width: 300px;
	min-height: 20px;
	position: relative;
	text-decoration: none;
	z-index: 0;
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Input = styled.input`width: ;`;

class Navabar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleColor: false
		};
	}

	changeColor = (event) => {
		this.setState({ toggleColor: !this.state.toggleColor });
	};

	render() {
		console.log("theme", this.props.theme)
		return (
			<>
			{this.props.theme.isDark ? 
			<Wrapper style={{backgroundColor:" rgb(45, 114, 25, 0.5)"}}>
				<LeftSection>
					<SmallButton>
						<i class="fa fa-home" aria-hidden="true" />
					</SmallButton>
					<BoardButton>
						<i class="fa fa-list-alt" aria-hidden="true" />
						<span style={{ fontSize: '18px' }}>Board</span>
					</BoardButton>
					<SearchButton>
						<i class="fa fa-search" aria-hidden="true" />
					</SearchButton>
				</LeftSection>
				<Logo>Slate</Logo>
				<RightSection>
					{this.state.toggleColor ? (
						<ChangeColourContainer style={{ display: 'block' }}>
							<ColorHeader>
								<span>Color</span>
								<span onClick={() => this.changeColor()}>X</span>
							</ColorHeader>
							<ListCard style={{ backgroundColor: 'crimson' }} />
							<ListCard style={{ backgroundColor: 'lightblue' }} />
							<ListCard style={{ backgroundColor: 'gold' }} />
							<ListCard style={{ backgroundColor: 'green' }} />
						</ChangeColourContainer>
					) : (
						<ChangeColourContainer style={{ display: 'none' }} />
					)}
					<SmallButton onClick={this.changeColor}>
						<i class="fas fa-palette" />
					</SmallButton>
					<SmallButton className="gg-add-r">
						<i class="fa fa-plus" aria-hidden="true" />
					</SmallButton>
					<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHCm80Shzkvsg/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=HjjGVtjYNxp3b3ZC4IEqUpQL_SNqBGhD7cqmbVP0Jb8" />
				</RightSection>
			</Wrapper>
			:
			<Wrapper style={{backgroundColor:" rgb(45, 114, 25, 0.5)"}}>
				<LeftSection>
					<SmallButton>
						<i class="fa fa-home" aria-hidden="true" />
					</SmallButton>
					<BoardButton>
						<i class="fa fa-list-alt" aria-hidden="true" />
						<span style={{ fontSize: '18px' }}>Board</span>
					</BoardButton>
					<SearchButton>
						<i class="fa fa-search" aria-hidden="true" />
					</SearchButton>
				</LeftSection>
				<Logo>Slate</Logo>
				<RightSection>
					{this.state.toggleColor ? (
						<ChangeColourContainer style={{ display: 'block' }}>
							<ColorHeader>
								<span>Color</span>
								<span onClick={() => this.changeColor()}>X</span>
							</ColorHeader>
							<ListCard style={{ backgroundColor: 'crimson' }} />
							<ListCard style={{ backgroundColor: 'lightblue' }} />
							<ListCard style={{ backgroundColor: 'gold' }} />
							<ListCard style={{ backgroundColor: 'green' }} />
						</ChangeColourContainer>
					) : (
						<ChangeColourContainer style={{ display: 'none' }} />
					)}
					<SmallButton onClick={this.changeColor}>
						<i class="fas fa-palette" />
					</SmallButton>
					<SmallButton className="gg-add-r">
						<i class="fa fa-plus" aria-hidden="true" />
					</SmallButton>
					<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHCm80Shzkvsg/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=HjjGVtjYNxp3b3ZC4IEqUpQL_SNqBGhD7cqmbVP0Jb8" />
				</RightSection>
			</Wrapper>
			}

			</>
		);
	}
}

export default Navabar;

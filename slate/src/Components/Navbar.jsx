import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	// border: 1px solid black;
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	background-color: #2d7219;
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
	background-color: #5aac44;
	color: white;
	border: none;
	border-radius: 3px;

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
	color: white;
	border: none;
	border-radius: 3px;
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
	color: white;
	border: none;
	border-radius: 3px;
	margin-left: 2px;
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

const Input = styled.input`width: ;`;

class Navabar extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Wrapper>
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
					<SmallButton className="gg-add-r">
						<i class="fa fa-plus" aria-hidden="true" />
					</SmallButton>
					<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHCm80Shzkvsg/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=HjjGVtjYNxp3b3ZC4IEqUpQL_SNqBGhD7cqmbVP0Jb8" />
				</RightSection>
			</Wrapper>
		);
	}
}

export default Navabar;

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const LeftSection = styled.div`
    border: 1px solid red;
    height: 32px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
`;

const RightSection = styled.div`
    border: 1px solid blue;
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
`;

const Logo = styled.a`
    display: block;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 5px;
    font-size: 25px;
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
`;

const SearchButton = styled.button`
    height: 32px;
    width: 180px;
    text-align: right;

    @media screen and (max-width: 760px) {
        height: 32px;
        width: 32px;
    }
`;

const Input = styled.input`
    width:
`;


class Navabar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Wrapper>
                <LeftSection>
                    <SmallButton>
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </SmallButton>
                    <BoardButton>
                        <i class="fa fa-list-alt" aria-hidden="true"></i>
                        <span style={{fontSize: '18px'}}>Board</span>
                    </BoardButton>
                    <SearchButton>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </SearchButton>
                </LeftSection>
                <Logo>Slate</Logo>
                <RightSection>
                    <SmallButton className="gg-add-r">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </SmallButton>
                    <Avatar src="https://via.placeholder.com/100"/>
                </RightSection>
            </Wrapper>
        )
    }
}

export default Navabar;

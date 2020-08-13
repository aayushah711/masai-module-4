import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // border: 1px solid black;
    width: 280px;
    display: flex;
    flex-direction: column;
`;


const Boards = styled.div`
    // border: 1px solid black;
    width: 100%;
    height: 40px;
    display: flex;
    margin-bottom: 4px;
`;

const Color = styled.div`
    // border: 1px solid black;
    width: 36px;
    height: 40px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

const Heading = styled.div`
    // border: 1px solid black;
    width: 235px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 700;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
    line-height: 20px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`;

function BoardsDropdown(props) {
    return (
        <Wrapper>
            <Boards>
                <Color style={{backgroundColor: "rgb(81, 152, 58)"}}/>
                <Heading style={{backgroundColor: "rgb(81, 152, 58, 0.5)"}}>
                Masai sprint 4
                </Heading>
            </Boards>

            <Boards>
                <Color style={{backgroundColor: "rgb(116, 82, 134)"}}/>
                <Heading style={{backgroundColor: "rgb(116, 82, 134, 0.5)"}}>
                Masai sprint 5 
                </Heading>
            </Boards>

            <Boards>
                <Color style={{backgroundColor: "rgb(5, 102, 163)"}}/>
                <Heading style={{backgroundColor: "rgb(5, 102, 163, 0.5)"}}>
                Masai sprint 6  
                </Heading>
            </Boards>

        </Wrapper>
    )
}

export default BoardsDropdown;
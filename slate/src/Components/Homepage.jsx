import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // border: 1px solid black;
    width: 80%;
    display: flex;
    flex-direction: column;
    color: #172b4d;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 40px;
`;

const BoardsWrapper = styled.ul`
    // border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    padding: 0px;
`;

const Board = styled.li`
    // border: 1px solid black;
    position: relative;
    width: 200px;
    cursor: pointer;
    list-style: none;
    height: 96px;
    border-radius: 3px;
    margin-right: 10px;
    margin-top: 10px;
`;

const Headings = styled.div`
    // border: 1px solid red;
    height: 32px;
    font-weight: bold;
    font-size: 16px;
    font-weight: 700;
    color: #172b4d;
    display: flex;
    align-items: center;
    padding-left: 8px
`;

const BoardTitles = styled.a`
    
`;

function Homepage() {
    return (
        <React.Fragment>
            <Wrapper>
                <Headings><i className="far fa-clock"
                                style={{margin: "0px 15px 0px 0px"}}></i> Recently Viewed</Headings>
                <BoardsWrapper>
                    <Board
                        style={{backgroundColor: "#458131"}}>
                        <Headings style={{color: "white"}}>Module 4 Board</Headings>
                    </Board>
                    <Board
                        style={{backgroundColor: "#745286"}}>
                        <Headings style={{color: "white"}}>Module 4 Board</Headings>
                        </Board>
                </BoardsWrapper>
            </Wrapper>
            <Wrapper>
                <Headings><i className="far fa-user"
                                style={{margin: "0px 15px 0px 0px"}}></i> Personal Board</Headings>
                <BoardsWrapper>
                    <Board
                        style={{backgroundColor: "#458131"}}>
                        <Headings style={{color: "white"}}>Module 4 Board</Headings>
                    </Board>
                    <Board
                        style={{backgroundColor: "#0566a3"}}>
                        <Headings style={{color: "white"}}>Module 4 Board</Headings>
                        </Board>
                    <Board
                        style={{backgroundColor: "#745286"}}>
                        <Headings style={{color: "white"}}>Module 4 Board</Headings></Board>
                </BoardsWrapper>
            </Wrapper>
        </React.Fragment>
    )
}

export default Homepage;
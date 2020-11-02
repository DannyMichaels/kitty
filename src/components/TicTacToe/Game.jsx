import React, { useState } from "react";
import { calculateWinner } from "../../services/helpers";
import Board from "./Board";
import styled from "styled-components";
import Button from '../../components/shared/Styled/Button'


function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const Div = styled.div`
    width: 200px;
    margin: 20px auto;
    margin-bottom: 100px;
    text-align: center;
    p{
      
      font-weight: bold;
       font-size: 36px;
       font-family: "Indie Flower", cursive;
    }
  `;


  const handleClick = i => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? '🐱' : '🐭' // <Cat /> : <Mouse />; 
    setBoard(boardCopy);
    setXisNext(!xIsNext);
}

  const renderMoves = () => (
    <Button onClick={() => setBoard(Array(9).fill(null))}>Refresh</Button>
  );
  
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <Div>      
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ?  '🐱' : '🐭')}</p>
        {renderMoves()}
      </Div>
    </>
  );
}

export default Game;

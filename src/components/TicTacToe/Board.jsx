import React from "react";
import Square from "./Square";
import styled from "styled-components";

const StyledBoard = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

function Board({ squares, onClick }) {
  return (
    <StyledBoard>
      {squares.map((square, idx) => (
        <Square key={idx} value={square} onClick={() => onClick(idx)} />
      ))}
    </StyledBoard>
  );
}

export default Board;

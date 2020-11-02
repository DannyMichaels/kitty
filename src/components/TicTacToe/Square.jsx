import React from "react";
import styled from 'styled-components'

const StyledSquare = styled.button`
  background: white;
  border: 2px solid black;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`

function Square({onClick, value}) {
  return (
      <StyledSquare onClick={onClick}>{value}</StyledSquare>
    
  );
}

export default Square;

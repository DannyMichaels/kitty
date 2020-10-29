import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
position: fixed;
width: 100%;
bottom: 0;
left: 0;
color: black; 
font-size: 36px;  
height: 7vh;
padding: 10px;
margin-top: 20px;
align-items: center;
border-top: 1px solid black;
z-index: 1;
background-color: white;

img {
  width: 100px;
  height: 50px;
  margin: 20px; 
}
img:hover{
  transform: translateY(-4px);
}
`

function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/dannymichaels" target="_blank" rel="noreferrer"><img src="https://www.flaticon.com/premium-icon/icons/svg/527/527589.svg" alt="GitHub"></img></a>
  </StyledFooter>
  )
}

export default Footer

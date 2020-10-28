import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
position: absolute;
width: 100%;
bottom: 0;
left: 0;
color: White;
font-size: 36px;  
background-color: black;
height: 80px;
`

function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/dannymichaels" target="_blank" rel="noreferrer">Github</a>
  </StyledFooter>
  )
}

export default Footer

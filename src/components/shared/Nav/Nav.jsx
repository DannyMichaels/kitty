import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid black;
left: 0;
padding: 20px;
height: 9vh;

a {
  text-decoration: none;
  color: black;
  font-size: 36px;
  font-weight: bold;
}

img {
  max-height: 100px;
  width: 100px;
  margin: 20px;
}
`

function Nav() {
  return (
    
    <Navbar>
    <NavLink to='/' ><img src="https://www.flaticon.com/svg/static/icons/svg/821/821946.svg" alt="Kitty Logo" /> </NavLink> 
    </Navbar>
  )
}

export default Nav

import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.nav`
display: flex;
border-bottom: 1px solid black;

a {
  text-decoration: none;
  color: black;
  font-size: 36px;
  font-weight: bold;
}

img {
  height: 100px;
  width: 100px;
}
`

function Nav() {
  return (
    
    <Navbar>
    <NavLink to='/' ><img src="https://www.flaticon.com/svg/static/icons/svg/821/821946.svg" alt="Kitty Logo" /> Kitty </NavLink> 
    </Navbar>
  )
}

export default Nav

import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.nav`
    display: flex;
    flex: 1;
    width: 100%;
    background-color: white;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 5px 0;
    box-shadow: 1px 1px 1px .3px black;
    align-items: center;

    

a {
  text-decoration: none;
  color: black;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;

}

img {
  max-height: 100px;
  width: 100px;
  margin: 0 20px;
}

img:hover{
transform: scale(1.004);
}

a:hover{
  transform: scale(1.004);
}

`

function Nav() {
  return (
    
    <Navbar>
    <NavLink to='/' ><img src="https://www.flaticon.com/svg/static/icons/svg/821/821946.svg" alt="Kitty Logo" />Kitty</NavLink> 
    </Navbar>
  )
}

export default Nav

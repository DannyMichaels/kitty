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
    justify-content: space-between;
    flex-flow: row;
    

a {
  text-decoration: none;
  color: black;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;
  margin-right: 20px;
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

.right_link{
  display: inline-block;
}
.right__link:hover{
  display: inline-block;
  transform: skew(-5deg);
}

.nav__right{
  margin-right: 30px;
  
}

.lol {
  text-decoration: none;
  color: black;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;
  margin-right: 20px;
  cursor: default;
}

`

function Nav() {
  return (
    
    <Navbar>
      <NavLink to='/' ><img src="https://www.flaticon.com/svg/static/icons/svg/821/821946.svg" alt="Kitty Logo" />Kitty</NavLink> 
      <div className="nav__right">
        <NavLink to='/create-cat' > <span className="right__link">Create Cat</span> </NavLink>  <span className="lol">|</span>
        <NavLink to='/cat-gallery'><span className="right__link">Cat Gallery</span></NavLink> 
      </div>
    </Navbar>
  )
}

export default Nav

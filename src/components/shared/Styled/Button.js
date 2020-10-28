import styled from 'styled-components'

const Button = styled.button`
background-color: black;
border: 1px solid white;
color: white;
font-size: 36px;
font-weight: bold;
cursor: pointer;

&:focus {
  outline: 0;
}

&:active {
  color: black;
  background-color: white;
}
`
export default Button
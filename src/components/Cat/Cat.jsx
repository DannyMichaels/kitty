import React from 'react'
import styled from 'styled-components'

let CatContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: black;
color: white;
width: 250px;
max-width: 300px;
text-align: center;
padding-bottom: 20px;
border: 3px solid grey;
margin: 10px;

img {
  max-width: 200px;
  max-height: 200px;
}
`
function Cat(props) {
  return (
    <CatContainer>
        <h3> Name: &nbsp; {props.cat.fields.name}</h3>
      <h3>Breed: &nbsp; {props.cat.fields.breed}</h3>
        <img src={props.cat.fields.image} alt="cat" />
    </CatContainer>
  )
}

export default Cat

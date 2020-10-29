import React from 'react'
import styled from 'styled-components'

let CatContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: black;
color: white;
width: 300px;
max-width: 300px;
text-align: center;
padding-bottom: 20px;
border: 3px solid grey;
margin: 20px;

img {
  max-width: 300px;
  max-height: 300px;
}
`
function Cat(props) {
  return (
    <CatContainer>
        <h3> Name: {props.cat.fields.name}</h3>
      <h3>Breed: {props.cat.fields.breed}</h3>
        <img src={props.cat.fields.image} alt={props.cat.fields.name} />
    </CatContainer>
  )
}

export default Cat

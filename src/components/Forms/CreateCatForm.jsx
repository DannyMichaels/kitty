import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
background-color: black;
color: white;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;

input{ 
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  font-weight: bold;
}
`

function CreateCatForm(props) {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Form onSubmit={props.handleSubmit}>
        <h1>Create Cat</h1>
              <label htmlFor="name" type="text"> </label>
          <input type="text" name='name' value={props.name} placeholder="Enter Cat Name" onChange={(e) => props.setName(e.target.value)} /> <br />
          <label htmlFor="breed" type="text"> </label>
 <input type="text" name='breed' value={props.breed} placeholder="Enter Cat Breed" onChange={(e) => props.setBreed(e.target.value)} /> <br />
        <label htmlFor="image" type="text"></label>

          <input type="text" name='image' value={props.image} placeholder="Enter Cat Image" onChange={(e) => props.setImage(e.target.value)} /> <br />
          <button>Submit</button>
      </Form>
    </div>
  )
}

export default CreateCatForm

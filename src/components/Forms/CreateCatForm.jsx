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
        <input type="text" name='name' value={props.name} onChange={(e) => props.setName(e.target.value)}placeholder="Enter Cat Name" /> <br />
        <input type="text" name='breed' value={props.breed} onChange={(e) => props.setBreed(e.target.value)} placeholder="Enter Cat Breed" /> <br />
        <input type="text" name='image' value={props.image} onChange={(e) => props.setImage(e.target.value)}placeholder="Enter Cat Image" /> <br />
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default CreateCatForm

import React, { useState } from 'react'
import CreateCatForm from '../../components/Forms/CreateCatForm'
import axios from 'axios'

function CreateCat() {
  
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [image, setImage] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert('You have to add a name!')
      return
    } else if (!breed) {
      alert('You have to add a breed!')
      return
    } else if (!image) {
      alert('You have to add a image')
      return
    } 

    const fields = {
      name,
      breed,
      image,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedCats`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setName("");
    setBreed("");
    setImage("");
} 
  return (
    <div>
      <CreateCatForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        breed={breed}
        setBreed={setBreed}
        image={image}
        setImage={setImage}
          />
    </div>
  )
}
export default CreateCat

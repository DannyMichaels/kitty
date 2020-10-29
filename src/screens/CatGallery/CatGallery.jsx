import React, { useState, useEffect } from 'react'
import { getCats } from '../../services/apiConfig'
import Cat from "../../components/Cat/Cat"

function CatShowcase() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const catResponse = await getCats() 
      setCats(catResponse);
    };
    getApi();
  }, []);

  return (
    <div className='cat-container' style={{ display: 'flex',
    alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '10px'}}>
      {cats.map((cat) => (
            <Cat
              style={{ textAlign: "center" }}
              cat={cat}
              />
          ))}
    </div>
  )
}

export default CatShowcase

import React, { useState, useEffect } from 'react'
import { getCats } from '../../services/apiConfig'
import Cat from "../../components/Cat/Cat"

function CatShowcase() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getApi = async () => {
      const catResponse = await getCats() 
      setCats(catResponse);
      setLoading(false)
    };
    getApi();
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: 'center', margin: '0 auto' }}>LOADING CAT GALLERY...</h1>
  }
  return (
    <div className='cat-container' style={{ display: 'flex',
    alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '40px'}}>
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

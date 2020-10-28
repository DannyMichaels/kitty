import React , { useState, useEffect } from 'react'
import './Home.css'
import { getCat } from '../../services/apiConfig'

function Home() {
  const [cat, setCat] = useState([])
  
  useEffect(() => {
    const getApi = async () => {
      const response = await getCat()
      setCat(response)
      console.log(response)
    }
    getApi()
  }, [])

  return (
    <div className="home">
      <h1>hello</h1>
    <button>GET CAT</button>
    </div>
  )
}

export default Home

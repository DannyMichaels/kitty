import React , { useState, useEffect } from 'react'
import './Home.css'
import { getCat } from '../../services/apiConfig'
import Button from '../../components/shared/Styled/Button'



function Home() {
  const [count, setCount] = useState(0)
  const [catData, setCatData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = `${count} cats seen!`
  }, [count])
 
  useEffect(() => {
    const getApi  = async () => {
      const response = await getCat()
      setCatData(response[0])
      setLoading(false)
    }
    getApi()
  }, [])

  useEffect(() => {
    if (count + 1) {
      const getApi = async () => {
        const response = await getCat()
        setCatData(response[0])
        setLoading(false)
      }
    getApi()
    }
  }, [count])


  return (
    <div className="home">
      <div>
        <div>
          { loading ? <div style={{fontSize: '36px'}}>LOADING CAT...</div> : catData && <img src={catData.url} alt="cat"/>}
        </div>
      </div>  
    <Button onClick={() => setCount(count + 1)}>GET CAT</Button>
    </div>
  )
}

export default Home

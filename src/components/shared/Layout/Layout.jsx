import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <>
    <Nav />
     {props.children} 
      <Footer />
      </>
  )
}

export default Layout

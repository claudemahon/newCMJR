import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import '../pages/style.css'

const Layout = ({children}) => {
  return(
    <>
    <Navbar />
    <div>{children}</div>
    <Footer />
    </>
  )
}


export default Layout
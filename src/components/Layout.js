import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from './Navbar'
import Footer from './Footer'
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
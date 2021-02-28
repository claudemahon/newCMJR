import React from 'react'
import 'bulma/css/bulma.css'
import Header from './Header.js'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return(
    <>
    <Header />
    <div>{children}</div>
    <Footer />
    </>
  )
}


export default Layout
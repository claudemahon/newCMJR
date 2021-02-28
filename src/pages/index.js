import React from "react"
// import { Link } from "gatsby"
import 'bulma/css/bulma.css'
import './style.css'
// Page Components
import SEO from "../components/seo"
//Page Components

const IndexPage = () => (
  <>
    <SEO title="CMJR Development Home"/>
   <section className="hero is-fullheight bg-img">
     <div className="hero-body">
       <div className="container">
         <h1 className="title">CMJR Development</h1>
         <h2 className="subtitle ">Proudly Building Modern Website's Since 2015</h2>
       </div>
     </div>
   </section>
  </>
)

export default IndexPage

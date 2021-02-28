import React from "react"
// import { Link } from "gatsby"
import 'bulma/css/bulma.css'
import './style.css'
// Page Components
import Layout from '../components/layout'
import SEO from "../components/seo"
//Page Components

const IndexPage = () => (
  <>
   <Layout>
   <SEO title="CMJR Development Home"/>
    <section className="hero is-fullheight-with-navbar bg-img">
     <div className="hero-body">
       <div className="container">
         <h1 className="title has-text-light">CMJR Development</h1>
         <h2 className="subtitle has-text-light ">Proudly Building Modern Website's Since 2015</h2>
       </div>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
import React from "react"
import 'bulma/css/bulma.css'
// Page Components
import Layout from '../components/Layout'
import SEO from "../components/seo"
//Page Components

const IndexPage = () => (
  <>
   <Layout>
   <SEO title="CMJR Development Home"/>
    <section className="hero is-fullheight bg-img">
     <div className="hero-body">
       <div className="container has-text-centered">
         <h1 className="main-title has-text-light">Claude Mahon</h1>
         <h2 className="subtitle has-text-light">Front-End Web Developer</h2>
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body has-text-centered">
       <h1 className="main-title">About Me</h1>
       <h2 className="subtitle">I design and code beautifully simple things, and I love what I do.</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
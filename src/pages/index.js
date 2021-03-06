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
         <h2 className="main-title has-text-light">Giving the little guys a piece of the pie</h2>
         {/* <h1 className="title has-text-light">Agramith</h1> */}
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body">
       <h1 className="title">Agramith</h1>
       <h2 className="subtitle">Agramith is being developed to help both landlords and tenants reach common ground. Agramith is currently being developed to utilize smart contracts to better automate commerical real estate. </h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
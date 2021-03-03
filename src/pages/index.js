import React from "react"
// import { Link } from "gatsby"
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
         <h2 className="subtitle has-text-light">Making everyone a landlord</h2>
         {/* <h1 className="title has-text-light">Agramith</h1> */}
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body">
       <h1 className="title">Ag - ra - mi - th</h1>
       <h2 className="subtitle">Keeping both landlord and tenants in mind, Agramith is being developed to meet the very demanding needs of both landlords and tenants. The Agramith platform is being developed to initally deal with, payment of rent, provide a recorded environment were all communiscations are monitored. Porvide a large service network for landlords and provide both landlords and tenats a way of verifying each other. This platform is being developed to help improve the experience of private and commercial real estate.</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
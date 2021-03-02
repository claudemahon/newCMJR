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
         <h2 className="subtitle has-text-light">Better Landlords, Better Tenants, Better Communities</h2>
         <h1 className="title has-text-light">Agramith</h1>
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body">
       <h1 className="title">Ag - ra - mi - th</h1>
       <h2 className="subtitle">Agramith is currently in the works. Agramith is being developed to harness the power of the blockchain to help landlords better manage their properties. Allow Landlords to select from a pool of vetted and interested tenants. Allow tenants to view the ratings of the landlord, all while harnessing the power of Smart Contracts. Procced to the About us for a more indepht look at Agramith</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
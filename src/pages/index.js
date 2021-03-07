import React from "react"
import 'bulma/css/bulma.css'
// Page Components
import Layout from '../components/Layout.js'
import SEO from "../components/seo.js"
//Page Components

const IndexPage = () => (
  <>
   <Layout>
   <SEO title="CMJR Development Home"/>
    <section className="hero is-fullheight bg-img">
     <div className="hero-body">
       <div className="container has-text-centered">
         <h2 className="main-title has-text-light">Giving the little guys a piece of the pie, powered by smart contracts</h2>
         {/* <h1 className="title has-text-light">Agramith</h1> */}
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body has-text-centered">
       <h1 className="title">Agramith</h1>
       <h2 className="subtitle">Agramith is currently beign developed as both a Commercial and Residental real estate investing platform. How do we differ from other platforms? Agramith uses EOS Smart contracts to better protect investors from bad Investments. Smart Contracts harness the security, transparency and speed of the blockchain to help our investors maximize their moneys potential, all while ensuring that at anytime without notice, investors can audit Agramaith. We are currently planning a soft launch of the platform in the 4th quarther of 2021.Click here to find out more.  </h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
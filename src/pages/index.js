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
       <h1 className="main-title">I design and code beautifully simple things, and I love what I do. </h1>
       <h2 className="subtitle">Hi there, I'm Claude from Toronto. I have been developing website's for around 6 years as a hobby, with 1 year of professional web development. After graduating from Highschool, I attended and graduated from Humber College's Web Design and Development program. Please, feel free to contact me if you see anything you like. Please navigate to my project page to view some of my creations.</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
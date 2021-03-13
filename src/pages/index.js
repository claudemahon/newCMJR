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
       <h2 className="subtitle">Hi there, I'm Claude, a Front-End Developer from Toronto. Thanks for stopping by, here's a little about myself. I've been developing personal websites for around 6 years, with this past year working on some professinal website's for businesses. I have learned a lot about the needs of businesses and the demand for perfection, which has really shapped the way I develop sites. If you would like to learn about some of the projects I have worked on in the past year, navigate to my projects page. If you like to connect, please email me a claudemahonjr@gmail.com.</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
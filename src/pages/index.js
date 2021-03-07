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
         <h1 className="main-title has-text-light">Website Design, Ecommerce & Online Marketing with Remarkable Results</h1>
         <h2 className="subtitle has-text-light">Connecting creativity, technology and commerce to drive brands and business growth.</h2>
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body has-text-centered">
       <h1 className="title">About Us</h1>
       <h2 className="subtitle">Hi there, Im Claude, owner and head developer at Agramith Media. A little back story, I started this company to help small businesses reach their true potential. For to long, many companies in my feild have been selling "Cookie Cutter Websites", with your "Best Intrest In Mind", but this is not true. At the end of the day, they want you in and out the door as quickly as possible, not with me. Beign a small business means that I also understand the needs of a small business and better address your needs. </h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
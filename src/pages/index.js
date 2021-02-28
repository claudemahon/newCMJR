import React from "react"
// import { Link } from "gatsby"
import 'bulma/css/bulma.css'
import './style.css'
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
       <div className="container">
         <h1 className="title has-text-light">CMJR Development</h1>
         <h2 className="subtitle has-text-light ">Proudly Building Modern Website's Since 2015</h2>
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body">
       <h1 className="title">testing 123</h1>
       <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem reprehenderit odit sed labore fuga eum nam dicta quisquam incidunt accusantium, delectus dolore laborum itaque dolorum voluptates illum perferendis ab similique! Iusto saepe ipsam corporis quidem perferendis hic similique recusandae vel, laborum, soluta fugit, officia excepturi voluptatem laudantium eligendi illo!</h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
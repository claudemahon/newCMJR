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
         {/* <h1 className="title has-text-light">Agramith</h1> */}
         <h2 className="subtitle has-text-light ">Making Contracts Great Again</h2>
       </div>
     </div>
   </section>

   <section className="section is-large">
     <div className="body">
       <h1 className="title">What is Agramith?</h1>
       <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit aliquam, rem corporis aliquid, quis cumque quam nisi praesentium animi a molestias est totam quod, molestiae repellendus odio harum repellat eligendi asperiores. Cum dolorum sint, architecto ipsum in perferendis accusantium magnam eaque vero aut. Est eligendi harum a, unde, expedita numquam similique voluptatum praesentium, dignissimos illum recusandae reprehenderit! Accusamus consectetur eos pariatur nihil reiciendis tenetur veniam repudiandae eligendi ea, perferendis qui quaerat in quisquam. Vero dolorem minus impedit delectus cumque necessitatibus perspiciatis in quibusdam voluptates et dolorum suscipit id odio unde tenetur, aspernatur eaque dignissimos quis accusantium! Quam, cum labore. </h2>
     </div>
   </section>
   </Layout>
  </>
)

export default IndexPage
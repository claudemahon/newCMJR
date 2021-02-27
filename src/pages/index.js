import React from "react"
import { Link } from "gatsby"
import 'bulma/css/bulma.css'
// Components
import SEO from "../components/seo"
// Components

const IndexPage = () => (
  <Layout>
    <SEO title="home" description="This is the home page"/>
    <h1>Testing 123</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

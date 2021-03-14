import React from 'react'
import 'bulma/css/bulma.css'
import SEO from '../components/seo'
import Layout from '../components/Layout'


const Projects = () => {
    return(
        <>
        <SEO title='Products'/>
        <Layout>
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="main-title">Page in Development</h1>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    )
}

export default Projects
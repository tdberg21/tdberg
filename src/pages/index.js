import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello friends!</h1>
    <p>Building a site for myself while learning some Gatsby.</p>
    <div>
      <img src="https://source.unsplash.com/random/400x400" alt="" />
    </div>
    <Link to="/about/">About me</Link> <br />
  </Layout>
)

export default IndexPage

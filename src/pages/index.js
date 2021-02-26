import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hello friends.</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>Building something great.</p>
    <div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    <Link to="/about/">About me</Link> <br />
  </div>
)

export default IndexPage

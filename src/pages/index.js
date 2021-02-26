import React from "react"
import { Link, graphql } from "gatsby"


import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero content={data.hero.edges[0].node}/>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
{
  hero: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          emoji
          subtitlePrefix
          subtitleHighlight
        }
        rawMarkdownBody
      }
    }
  }
}
`;

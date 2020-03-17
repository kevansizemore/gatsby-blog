import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `There ${
    totalCount === 1 ? "is" : "are"
  } ${totalCount} blog article${
    totalCount === 1 ? "" : "s"
  } tagged with: "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Related Articles by Tag"/>
      <NavMenu />
      <div>
        <h2>{tagHeader}</h2>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}><Link to={slug}>{title}</Link></li>
            )
          })}
        </ul>
        <Link to="/tags"><strong>View All Tags</strong></Link>
      </div>
      <br />
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

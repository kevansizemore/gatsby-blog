import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location
}) => (

  <Layout location={location} title={title}>
    <SEO title="Tag Index" />
    <NavMenu />
    <div>
      <h2>Tag Index</h2>
      <p>Currently, there are {group.length} tags used throughout this blog.</p>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>#{tag.fieldValue}</Link>{' '}({tag.totalCount})</li>
        ))}
      </ul>
    </div>
    <br />
      <p><Link to="/blog">Return to Blog</Link></p>
    <br />
    <footer>
      <Bio />
    </footer>
  </Layout>
  
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
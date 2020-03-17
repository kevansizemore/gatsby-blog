import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const tagStyle = {
  display: "inline-block",
  marginLeft: "0px",
  marginBottom: "2px",
  paddingRight: "6px"
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <NavMenu />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        var postTags = "-no tags-"

        if(node.frontmatter.tags && node.frontmatter.tags.length){
          postTags = node.frontmatter.tags.map((tags) => 
          <li style={tagStyle}><Link to={`/tags/${tags}/`}>{tags}</Link></li>
          );
        }

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small><br />
              <small>Tagged with: <ul style={tagStyle}>{postTags}</ul></small>
              <Link style={{ boxShadow: `none` }} to={node.frontmatter.tags}></Link>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
        }
      }
    }
  }
`

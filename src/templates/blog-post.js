import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const tagStyle = {
  display: "inline-block",
  marginLeft: "0px",
  marginBottom: "2px",
  paddingRight: "8px"
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  var postTags = "-no tags-"

  if(post.frontmatter.tags && post.frontmatter.tags.length){
    postTags = post.frontmatter.tags.map((tags) => 
    <li style={tagStyle}><Link to={`/tags/${tags}/`}>#{tags}</Link></li>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <NavMenu />
      <article>
        <header>
          <h1
            style={{
              fontFamily: `sans-serif`,
              ...scale(.80),
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}{' | '}Tagged with: <ul style={tagStyle}>{postTags}</ul>
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
      }
    }
  }
`

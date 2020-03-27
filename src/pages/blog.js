import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import Featured from "../components/featured"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const tagStyle = {
  display: "inline-block",
  marginLeft: "0px",
  marginBottom: "2px",
  paddingRight: "8px"
}

const postSummaryStyle = {
  color: '#707070',
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <NavMenu />
      <Bio />
      <Featured />
      <p>The 25 most recent articles I've published are listed below. You can find more by using the search box at the top of this page, or by browsing my <Link to="/tags">tag index</Link>. Do you prefer using RSS to follow blogs? I've got <a href="../rss.xml">a feed for you</a>. Lastly, I have compiled some high-level <Link to="/blogstats">blog statistics</Link> if you're curious. Thanks for visiting and I hope you find an article you like.</p>
      <hr />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        var postTags = "-no tags-"

        if(node.frontmatter.tags && node.frontmatter.tags.length){
          postTags = node.frontmatter.tags.map((tags) => 
          <li style={tagStyle}><Link to={`/tags/${tags}/`}>#{tags}</Link></li>
          );
        }

        return (
          <article key={node.fields.slug}>
            <header style={{marginBottom: rhythm(1 / 4)}}>
              <h3 style={{marginBottom: rhythm(1 / 4)}}><Link style={{ boxShadow: `none` }} to={node.fields.slug}>{title}</Link></h3>
              <small style={postSummaryStyle}>{node.frontmatter.date}{' | '}~{node.timeToRead} minute(s){' | '}~{node.wordCount.words} words</small><br />
              <small style={postSummaryStyle}>Tagged with: <ul style={tagStyle}>{postTags}</ul></small>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 25) {
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
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`

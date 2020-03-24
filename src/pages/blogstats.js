import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const blogStatStyle = {
  color: '#707070',
  marginLeft: '30px'
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const articleCount = data.allMarkdownRemark.totalCount
  let totalWordCount = 0
  let totalReadTime = 0
  let {0 : lastBlogArticle} = posts
  let {[posts.length - 1] : firstBlogArticle} = posts;
  
  posts.map(({node}) => {
      totalWordCount += parseInt(node.wordCount.words)
      totalReadTime += parseInt(node.timeToRead)
      return(totalWordCount)})

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <NavMenu />
      <Bio />
      <h2>Blog Stats</h2>
      <ul style={blogStatStyle}>
        <li>Total number of articles: {new Intl.NumberFormat().format(articleCount)}</li>
        <li>Total number of words written: {new Intl.NumberFormat().format(totalWordCount)} </li>
        <li>Total number of reading minutes: ~{new Intl.NumberFormat().format(totalReadTime)} </li>
        <li>Average number of words per article: ~{new Intl.NumberFormat().format(parseInt(totalWordCount/articleCount))}</li>
        <li>Average number of reading minutes per article: ~{new Intl.NumberFormat().format(totalReadTime/articleCount)}</li>
        <li>First article published: {firstBlogArticle.node.frontmatter.date}</li>
        <li>Latest article published: {lastBlogArticle.node.frontmatter.date} </li>
      </ul>
      <br />
      <p><Link to="/blog">Go Back to Blog</Link></p>
      <br />
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
            date(formatString: "MMMM DD, YYYY")
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
      totalCount
    }
  }
`

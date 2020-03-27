import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const blogStatStyle = {
  color: '#202020',
  marginLeft: '30px'
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const articleCount = data.allMarkdownRemark.totalCount
  let totalWordCount = 0
  let totalSentenceCount = 0
  let totalParagraphCount = 0
  let totalReadTime = 0
  let {0 : lastBlogArticle} = posts
  let {[posts.length - 1] : firstBlogArticle} = posts;
  
  posts.map(({node}) => {
      totalWordCount += parseInt(node.wordCount.words)
      totalSentenceCount += parseInt(node.wordCount.sentences)
      totalParagraphCount += parseInt(node.wordCount.paragraphs)
      totalReadTime += parseInt(node.timeToRead)
      return(totalWordCount, totalSentenceCount, totalParagraphCount)})

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <NavMenu />
      <Bio />
      <h2>Blog Stats</h2>
      <ul style={blogStatStyle}>
        <li>This blog has {new Intl.NumberFormat("en-US").format(articleCount)} articles total. In aggregate, these articles have:</li>
        <ul>
          <li>{new Intl.NumberFormat("en-US").format(totalWordCount)} words</li>
          <li>{new Intl.NumberFormat("en-US").format(totalSentenceCount)} sentences</li>
          <li>{new Intl.NumberFormat("en-US").format(totalParagraphCount)} paragraphs</li>
        </ul>
        <br />
        <li>If you tried to read all of the entries in this blog, it would take ~{totalReadTime} minutes, depending on how quickly you read.</li>
        <br />
        <li>My average blog article has ~{parseInt(totalWordCount/articleCount)} words and can be read in about ~{parseFloat(totalReadTime/articleCount).toFixed(1)} minutes.</li>
        <br />
        <li>The first article in this blog was published on {firstBlogArticle.node.frontmatter.date}.</li>
        <br />
        <li>The latest article in this blog was published on {lastBlogArticle.node.frontmatter.date}.</li>
      </ul>
      <br />
      <p><Link to="/blog">Return to Blog</Link></p>
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
            paragraphs
            sentences
            words
          }
        }
      }
      totalCount
    }
  }
`

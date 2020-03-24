/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            email
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  const authSumStyle = {
    color: '#707070'
  }

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 80,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>.<br />
        <span style={authSumStyle}>{author.summary}</span><br />
        <a href={`mailto:${social.email}`} target="_blank" rel="noopener noreferrer">@email</a>{' | '}
        <a href={`https://www.linkedin.com/in/${social.linkedin}/`} target="_blank" rel="noopener noreferrer">@LinkedIn</a>{' | '}
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">@Twitter</a>
      </p>
    </div>
  )
}

export default Bio

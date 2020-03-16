import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import NavMenu from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const authorName = data.site.siteMetadata.author.name
  const authorEmail = data.site.siteMetadata.social.email

  return (
    <Layout location={location} title={siteTitle} author={authorName}>
      <SEO title="About" />
      <NavMenu />
      <Bio />
      <p>
        This site is a great place to learn more about me, some of my creative or technical projects, publications, and social networks.  Thank you for visiting.<br />
        <br />
        - Kevan
      </p>
      <h2>A Brief Introduction</h2>
      <p>I consider myself ordinary, someone easy to miss in a crowd. I'm usually pretty quiet; when I talk, I try to say something worth hearing. I am simple, predictable, and in most cases, reasonable. Faced with contention, I tend to continue being "a nice guy" even when it's self-detrimental. Each day, I strive to make the most of the time, talents, relationships, and opportunities God has graciously given.</p>
      <p>My interests include archery, collecting, cooking, education, gaming, illustration, making (fabricating), photography, programming, radio control modeling, reading, shooting, technology, theology, and writing.  I'm not interested in most television shows or sports. For recreation, I enjoy cycling, hiking, and fishing.  Some of my best memories involve time and experiences shared with family and friends.</p>
      <h2>Around the Internet</h2>
      <p>Searching for me on <a href="https://www.google.com/search?as_epq=kevan+sizemore" target="_blank" rel="noopener noreferrer">Google</a> or <a href="https://www.bing.com/search?q=%2bkevan+sizemore" target="_blank" rel="noopener noreferrer">Bing</a> yields mixed results at best. There are plenty of people with similar names and a plethora of services that offer to sell information about me. For your convenience, I have listed my "official" online repositories below. If you find information about me elsewhere on the Internet, it may be inaccurate. If you can't find what you need to know on this site or by using the links below, feel free to <a href={`mailto:${authorEmail}`} target="_blank" rel="noopener noreferrer">ask via email</a>.</p>
      <ul style={{marginLeft:48}}>
        <li><a href="https://about.me/kevansizemore" target="_blank" rel="noopener noreferrer">About.me</a></li>
        <li><a href="https://disqus.com/by/kevansizemore/" target="_blank" rel="noopener noreferrer">Disqus</a></li>
        <li><a href="https://faithlife.com/kevansizemore" target="_blank" rel="noopener noreferrer">Faithlife</a></li>
        <li><a href="https://github.com/kevansizemore" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://gitlab.com/kevansizemore" target="_blank" rel="noopener noreferrer">GitLab</a></li> 
        <li><a href="https://www.goodreads.com/user/show/85168234-kevan-sizemore" target="_blank" rel="noopener noreferrer">Goodreads</a></li>
        <li><a href="https://en.gravatar.com/kevansizemore" target="_blank" rel="noopener noreferrer">Gravatar</a></li>
        <li><a href="https://www.linkedin.com/in/kevanmsizemore/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.reddit.com/user/CanonicalBacon/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
        <li><a href="https://stackoverflow.com/users/11252720/kevan-sizemore" target="_blank" rel="noopener noreferrer">Stack Overlow</a></li>
        <li><a href="https://www.strava.com/athletes/13849643" target="_blank" rel="noopener noreferrer">Strava</a></li>
        <li><a href="https://twitter.com/kevansizemore" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://vimeo.com/kevansizemore" target="_blank" rel="noopener noreferrer">Vimeo</a></li>
        <li><a href="https://www.youtube.com/user/kevansizemore" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
      </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author{
          name
        }
        social {
          email
        }
      }
    }
  }
`

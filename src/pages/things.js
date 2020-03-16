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
      <SEO title="Things" />
      <NavMenu />
      <Bio />
      <h2>Things I Use</h2>
      <p>On several occasions I have been asked which online communities, web sites, products, and services I use. As a convenience to anyone that's curious, I have listed them here. If you have specific questions about anything that appears on this list, feel free to <a href={`mailto:${authorEmail}`} target="_blank" rel="noopener noreferrer">contact me via email</a>.</p>
      <h3>Communities</h3>
      <ul style={{marginLeft:48}}>
        <li><a href="https://modelaircraft.org/" target="_blank" rel="noopener noreferrer">Academy of Model Aeronautics</a></li>
        <li><a href="https://fh.org/" target="_blank" rel="noopener noreferrer">Food for the Hungry</a></li>
        <li><a href="https://nra.org/" target="_blank" rel="noopener noreferrer">National Rifle Association</a></li>
        <li><a href="https://newportnewsrc.org/" target="_blank" rel="noopener noreferrer">Newport News Park Radio Control Club</a></li>
        <li><a href="https://mytrinity.org/" target="_blank" rel="noopener noreferrer">Trinity United Methodist Church</a></li>
      </ul>
      <h3>News &amp; Information</h3>
      <ul style={{marginLeft:48}}>
        <li><a href="https://fullcirclemagazine.org/" target="_blank" rel="noopener noreferrer">Full Circle Magazine</a></li>
        <li><a href="https://gizmodo.com/" target="_blank" rel="noopener noreferrer">Gizmodo</a></li>
        <li><a href="https://lifehacker.com/" target="_blank" rel="noopener noreferrer">Lifehacker</a></li>
        <li><a href="https://www.macworld.com/" target="_blank" rel="noopener noreferrer">MacWorld</a></li>
        <li><a href="https://www.pcmag.com/" target="_blank" rel="noopener noreferrer">PC Magazine</a></li>
        <li><a href="https://www.theregister.co.uk/" target="_blank" rel="noopener noreferrer">The Register</a></li>
        <li><a href="https://www.umnews.org/" target="_blank" rel="noopener noreferrer">United Methodists News Service</a></li>
        <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
        <li><a href="https://www.wired.com/" target="_blank" rel="noopener noreferrer">Wired</a></li>
      </ul>
      <h3>Products &amp; Services</h3>
      <ul style={{marginLeft:48}}>
        <li><a href="https://1password.com/" target="_blank" rel="noopener noreferrer">1Password</a></li>
        <li><a href="https://www.acer.com/" target="_blank" rel="noopener noreferrer">Acer Laptops</a></li>
        <li><a href="https://smile.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Smile</a></li>
        <li><a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">Apple</a></li>
        <li><a href="https://www.backblaze.com/" target="_blank" rel="noopener noreferrer">Backblaze</a></li>
        <li><a href="https://www.brother-usa.com/" target="_blank" rel="noopener noreferrer">Brother Printers</a></li>
        <li><a href="https://global.canon/" target="_blank" rel="noopener noreferrer">Canon Cameras</a></li>
        <li><a href="https://www.dropbox.com/" target="_blank" rel="noopener noreferrer">Dropbox</a></li>
        <li><a href="https://evernote.com/" target="_blank" rel="noopener noreferrer">Evernote</a></li>
        <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a></li>
        <li><a href="https://gradolabs.com/" target="_blank" rel="noopener noreferrer">Grado Labs</a></li>
        <li><a href="https://www.icloud.com/" target="_blank" rel="noopener noreferrer">iCloud</a></li>
        <li><a href="https://www.logos.com/" target="_blank" rel="noopener noreferrer">Logos Bible Software</a></li>
        <li><a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft</a></li>
        <li><a href="https://www.obdev.at/" target="_blank" rel="noopener noreferrer">Objective Development</a></li>
        <li><a href="https://www.omnigroup.com/" target="_blank" rel="noopener noreferrer">The Omni Group</a></li>
        <li><a href="https://www.synology.com/" target="_blank" rel="noopener noreferrer">Synology</a></li>
        <li><a href="https://textexpander.com/" target="_blank" rel="noopener noreferrer">Text Expander</a></li>
        <li><a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu Linux</a></li>
        <li><a href="https://www.verizon.com/" target="_blank" rel="noopener noreferrer">Verizon</a></li>
      </ul>
      <p>At some point in the future, I plan to publish a reviews about my product and service experiences.</p>
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

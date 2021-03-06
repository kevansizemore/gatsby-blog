import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"


const Layout = ({ location, title, author, children }) => {
  let header

  header = (
    <h1
      style={{
        ...scale(0.95),
        marginBottom: rhythm(0.1),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <hr />
        Copyright © {new Date().getFullYear()} {author}. All rights reserved.{' '}
        Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.
      </footer>
    </div>
  )
}

export default Layout

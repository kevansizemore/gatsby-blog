import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Search from "../components/search"

const navStyle = {
  ...scale(0.35),
  fontFamily: `sans-serif`,
  boxShadow: 'none',
}

const NavMenu = () => {
  return (
    <div
      style={{
        marginBottom: rhythm(1.5)
      }}
    >
      <Link style={navStyle} to="/">About</Link>&nbsp;&nbsp;{' | '}&nbsp;&nbsp;
      <Link style={navStyle} to="/blog/">Blog</Link>&nbsp;&nbsp;{' | '}&nbsp;&nbsp;
      <Link style={navStyle} to="/things/">Things</Link>
      <Search />
    </div>
  )
}

export default NavMenu
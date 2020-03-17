import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Featured = () => {

const featuredTags = ["cheese", "test"]

  return (
    <div style={{marginBottom: rhythm(1.5)}}>
        <p>
          Some of the most common tags for my blog articles are:
        </p>
        <ul>
        {featuredTags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}/`}>{tag}</Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default Featured
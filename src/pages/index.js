import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 className="title">
      Hi people
    </h1>
    <h2 className="subtitle">
      Welcome to your new Gatsby site.
    </h2>
    <p className="mt-1">
      <Link to="/page-2/">Go to page 2</Link>
    </p>
  </div>
)

export default IndexPage

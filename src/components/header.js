import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {siteTitle}
      </Link>
    </div>
  </nav>
)

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, href }) => {
  if (to) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>
  } else {
    return <a href={href}>{children}</a>
  }
}

Link.proptypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Link

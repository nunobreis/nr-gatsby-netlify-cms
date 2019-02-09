import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, href, ...props }) => {
  if (to) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  } else {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
}

Link.proptypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Link

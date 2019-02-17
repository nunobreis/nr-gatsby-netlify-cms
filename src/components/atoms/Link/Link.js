import React from 'react'
import PropTypes from 'prop-types'

import { StyledGatsbyLink, StyledATag } from './Link.styles'

const Link = ({ children, to, href, ...props }) => {
  if (to) {
    return (
      <StyledGatsbyLink to={to} {...props}>
        {children}
      </StyledGatsbyLink>
    )
  } else {
    return (
      <StyledATag href={href} {...props}>
        {children}
      </StyledATag>
    )
  }
}

Link.proptypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Link

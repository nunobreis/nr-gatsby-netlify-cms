import React from 'react'

import { Wrapper, StyledLink } from './VerticalNavbar.styles'

const VerticalNavbar = () => (
  <Wrapper>
    <StyledLink href="https://www.instagram.com/nunobreis/">
      Instagram
    </StyledLink>
    <StyledLink href="https://www.facebook.com/nunobelemreis">
      Facebook
    </StyledLink>
    <StyledLink href="https://twitter.com/nunobreis">Twitter</StyledLink>
    <StyledLink href="https://www.linkedin.com/in/nunobreis/">
      LinkedIn
    </StyledLink>
  </Wrapper>
)

export default VerticalNavbar

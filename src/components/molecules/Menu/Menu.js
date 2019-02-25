import React from 'react'

import { Wrapper, StyledLink, CloseButton } from './Menu.styles'

const Menu = ({ handleCloseMenu }) => (
  <Wrapper>
    <CloseButton onClick={handleCloseMenu}>close</CloseButton>
    <StyledLink to="/" onClick={handleCloseMenu}>
      Home
    </StyledLink>
    <StyledLink to="/posts" onClick={handleCloseMenu}>
      Posts
    </StyledLink>
    <StyledLink to="/about" onClick={handleCloseMenu}>
      About
    </StyledLink>
    <StyledLink to="/contact" onClick={handleCloseMenu}>
      Contacts
    </StyledLink>
  </Wrapper>
)

export default Menu

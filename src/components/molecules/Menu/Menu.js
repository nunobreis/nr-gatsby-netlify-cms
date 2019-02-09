import React from 'react'

import { Wrapper, StyledLink, CloseButton } from './Menu.styles'

const Menu = ({ handleCloseMenu }) => (
  <Wrapper>
    <CloseButton onClick={handleCloseMenu}>close</CloseButton>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/posts">Posts</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contacts">Contacts</StyledLink>
  </Wrapper>
)

export default Menu

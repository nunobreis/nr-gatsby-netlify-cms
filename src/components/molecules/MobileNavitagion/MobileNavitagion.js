import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from '../../atoms/Link/Link'

import { tablet } from '../../mediaQueries/default'

import HomeIcon from './HomeIcon'
import PostsIcon from './PostsIcon'
import AboutIcon from './AboutIcon'
import ContactsIcon from './ContactsIcon'

const backgroundColor = ({ theme }) => theme.colors.bodyColor[0]

const linkColor = ({ theme }) => theme.colors.secondary[0]

const Wrapper = styled.div`
  display: flex;
  z-index: 2000;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${backgroundColor};
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0 0 0;

  ${media.greaterThan(tablet)`
    visibility: hidden;
  `};
`

const activeStyles = {
  borderBottom: `.2rem solid #32b3a6`,
}

const StyledLink = styled(Link)`
  margin: 0 1rem;
`
const StyledLabel = styled.label`
  display: block;
  color: ${linkColor};
`

const MobileNavitagion = () => (
  <Wrapper>
    <StyledLink to="/" activeStyle={activeStyles}>
      <HomeIcon />
      <StyledLabel>Home</StyledLabel>
    </StyledLink>
    <StyledLink to="/posts" activeStyle={activeStyles}>
      <PostsIcon />
      <StyledLabel>Posts</StyledLabel>
    </StyledLink>
    <StyledLink to="/about" activeStyle={activeStyles}>
      <AboutIcon />
      <StyledLabel>About</StyledLabel>
    </StyledLink>
    <StyledLink to="/contact" activeStyle={activeStyles}>
      <ContactsIcon />
      <StyledLabel>Contact</StyledLabel>
    </StyledLink>
  </Wrapper>
)

export default MobileNavitagion

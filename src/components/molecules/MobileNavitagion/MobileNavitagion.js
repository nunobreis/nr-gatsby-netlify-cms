import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from '../../atoms/Link/Link'

import { mobile } from '../../mediaQueries/default'

const backgroundColor = ({ theme }) => theme.colors.bodyColor[0]

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${backgroundColor};
  box-shadow: 0 -1px 10px rgba(0, 0, 0, .1);
  padding: 1rem 0;

  ${media.greaterThan(mobile)`
    visibility: hidden;
  `};
`

const StyledLink = styled(Link)`
  margin: 0 1rem;
`

const MobileNavitagion = () => (
  <Wrapper>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/posts">Posts</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contacts">Contacts</StyledLink>
  </Wrapper>
)

export default MobileNavitagion

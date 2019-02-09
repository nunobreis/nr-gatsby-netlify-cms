import React from 'react'
import styled from 'styled-components'

import Link from '../../atoms/Link/Link'

const color = ({ theme }) => theme.colors.white[0]

const fontFamily = ({ theme }) => theme.fonts.display

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
`

const StyledLink = styled(Link)`
  font-family: ${fontFamily};
  font-size: 4rem;
  margin-bottom: 4rem;
  color: ${color};
  text-align: center;
  text-decoration: none;

  &:hover{
      text-decoration: line-through;
  }
`

const Menu = () => (
  <Wrapper>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/posts">Posts</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contacts">Contacts</StyledLink>
  </Wrapper>
)

export default Menu

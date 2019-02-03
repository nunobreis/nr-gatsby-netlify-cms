import React from 'react'
import styled from 'styled-components'

import Navbar from '../../molecules/Navbar/Navbar'

const fontFamily = ({ theme }) => theme.fonts.primary
const color = ({ theme }) => theme.colors.primary[0]

const Logo = styled.p`
  font-family: ${fontFamily};
  color: ${color};
  font-size: 1.2rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`

const Header = () => (
  <Wrapper>
    <Logo>nu-no</Logo>
    <Navbar />
  </Wrapper>
)

export default Header

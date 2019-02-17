import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import MainLayout from '../MainLayout/MainLayout'
import { tablet } from '../../mediaQueries/default'
import HomeBackground from '../../molecules/HomeBackground/HomeBackground'

const Wrapper = styled.div`
  ${media.greaterThan(tablet)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
  `};
`

const Content = styled.div`
  max-width: 100%;

  ${media.greaterThan(tablet)`
    max-width: 50%;
  `};
`

const HomeLayout = ({ children }) => (
  <MainLayout>
    <Wrapper>
      <HomeBackground />
      <Content>{children}</Content>
    </Wrapper>
  </MainLayout>
)

export default HomeLayout

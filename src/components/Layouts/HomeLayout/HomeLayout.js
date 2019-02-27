import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import MainLayout from '../MainLayout/MainLayout'
import { tablet } from '../../mediaQueries/default'

const Wrapper = styled.div`
  ${media.greaterThan(tablet)`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  `};
`

const Content = styled.div`
  max-width: 100%;

  ${media.greaterThan(tablet)`
    width: 50%;
  `};
`

const BackgroundImage = styled.div`
  height: 12rem;
  ${media.greaterThan(tablet)`
    height: 100vh;
    width: 50%
  `};
`

const BackgroundStyles = {
  background: `url(/img/landingPicture.jpg) center center no-repeat`,
  backgroundSize: 'cover',
}

const HomeLayout = ({ children }) => (
  <MainLayout>
    <Wrapper>
      <BackgroundImage style={BackgroundStyles} />
      <Content>{children}</Content>
    </Wrapper>
  </MainLayout>
)

export default HomeLayout

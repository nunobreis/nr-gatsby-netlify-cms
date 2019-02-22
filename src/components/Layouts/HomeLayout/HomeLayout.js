import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import MainLayout from '../MainLayout/MainLayout'
import { tablet } from '../../mediaQueries/default'

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

const BackgroundImage = styled.div`
  padding: 15rem;

  ${media.greaterThan(tablet)`
    min-width: 50%;
    height: 100vh;
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

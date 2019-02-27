import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile, tablet, desktop } from '../../mediaQueries/default'

import MainLayout from '../MainLayout/MainLayout'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 6rem;

  & > div {
    flex: 1 1 30rem;
  }

  ${media.greaterThan(mobile)`
    padding: 4%;
  `};

  ${media.greaterThan(desktop)`
    padding: 3%;
  `};
`

const CoverPhoto = styled.div`
  height: 10rem;
  width: 100%;

  ${media.greaterThan(mobile)`
    height: 20rem;
  `};

  ${media.greaterThan(tablet)`
    height: 20rem;
  `};

  ${media.greaterThan(desktop)`
    height: 22rem;
  `};
`

const coverPhotoStyles = {
  background: `url(/img/landingPicture.jpg) center center / cover no-repeat`,
}

const PostsListLayout = ({ children }) => (
  <MainLayout>
    <CoverPhoto style={coverPhotoStyles} />
    <Content>{children}</Content>
  </MainLayout>
)

export default PostsListLayout

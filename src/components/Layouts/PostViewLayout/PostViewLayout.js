import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile, tablet } from '../../mediaQueries/default'

import MainLayout from '../MainLayout/MainLayout'

const PostContent = styled.section`
  padding: 2rem 4%;

  ${media.greaterThan(mobile)`
    padding: 2rem 10%;
  `};

  ${media.greaterThan(tablet)`
    padding: 2rem 20%;
  `};
`

const CoverPhoto = styled.div`
  height: 15rem;
  width: 100%;

  ${media.greaterThan(mobile)`
    height: 20rem;
  `};

  ${media.greaterThan(tablet)`
    height: 25rem;
  `};
`

const PostViewLayout = ({ children, coverPhoto, ...props }) => (
  <MainLayout {...props}>
    {coverPhoto ? (
      <CoverPhoto
        style={{
          background: `url(/img/${coverPhoto}) center center / cover fixed`,
        }}
      />
    ) : null}
    <PostContent>{children}</PostContent>
  </MainLayout>
)

export default PostViewLayout

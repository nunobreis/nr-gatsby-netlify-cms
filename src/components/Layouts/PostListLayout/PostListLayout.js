import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

import MainLayout from '../MainLayout/MainLayout'
import PostsListsBackground from '../../molecules/PostsListBackground/PostsListBackground'

const Content = styled.div`
  padding: 0;

  ${media.greaterThan(tablet)`
    display: flex;
    padding: 4%;
  `};
`

const PostsListLayout = ({ children }) => (
  <MainLayout>
    <PostsListsBackground />
    <Content>{children}</Content>
  </MainLayout>
)

export default PostsListLayout

import React from 'react'
import styled from 'styled-components'

import MainLayout from '../MainLayout/MainLayout'

const Content = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4%;

  & > div {
    flex: 1 1 30rem;
  }
`

const PostsListLayout = ({ children }) => (
  <MainLayout>
    <Content>{children}</Content>
  </MainLayout>
)

export default PostsListLayout

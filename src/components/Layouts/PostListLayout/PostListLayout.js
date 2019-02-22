import React from 'react'
import styled from 'styled-components'

import MainLayout from '../MainLayout/MainLayout'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4%;

  & > div {
    flex: 1 1 30rem;
  }
`

const CoverPhoto = styled.div`
  height: 20rem;
  width: 100%;
`

const coverPhotoStyles = {
  background: `url(/img/landingPicture.jpg) center center`,
}

const PostsListLayout = ({ children }) => (
  <MainLayout>
    <CoverPhoto style={coverPhotoStyles} />
    <Content>{children}</Content>
  </MainLayout>
)

export default PostsListLayout

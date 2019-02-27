import React from 'react'

import landingPicture from '../../../img/landingPicture.jpg'

import {
  Wrapper,
  StyledImage,
  TextContent,
  Author,
  PostTitle,
  Sinopse,
  Date,
  KeepReading,
} from './PostCard.styles'

const PostCard = ({ to, image, date, author, title, sinopse }) => (
  <Wrapper>
    {image ? <StyledImage src={landingPicture} alt="a test picture" /> : null}

    <TextContent>
      <PostTitle to={to}>{title}</PostTitle>
      <Date>{date}</Date>
      <Author>{author}</Author>
      <Sinopse>{sinopse}</Sinopse>
      <KeepReading to={to}>Keep Reading →</KeepReading>
    </TextContent>
  </Wrapper>
)

export default PostCard

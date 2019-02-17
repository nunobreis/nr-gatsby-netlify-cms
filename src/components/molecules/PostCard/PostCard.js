import React from 'react'

import TextLabel from '../../atoms/TextLabel/TextLabel'
import landingPicture from '../../../img/landingPicture.jpg'
import Link from '../../atoms/Link/Link'

import {
  Wrapper,
  StyledImage,
  TextContent,
  Author,
  PostTitle,
  Sinopse,
} from './PostCard.styles'

const PostCard = ({ to, image, date, author, title, sinopse }) => (
  <Wrapper>
    {image ? <StyledImage src={landingPicture} alt="a test picture" /> : null}

    <TextContent>
      <TextLabel>{date}</TextLabel>
      <Author>{author}</Author>
      <PostTitle>{title}</PostTitle>
      <Sinopse>{sinopse}</Sinopse>
      <Link to={to}>Keep Reading →</Link>
    </TextContent>
  </Wrapper>
)

export default PostCard

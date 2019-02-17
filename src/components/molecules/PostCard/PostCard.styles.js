import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile } from '../../mediaQueries/default'

import TextLabel from '../../atoms/TextLabel/TextLabel'
import Image from '../../atoms/Image/Image'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Subtitle from '../../atoms/Subtitle/Subtitle'

const whiteColor = ({ theme }) => theme.colors.white[0]

export const Wrapper = styled.div`
  display: flex;
  background-color: ${whiteColor};
  margin: 2rem;
  box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .1);

  ${media.greaterThan(mobile)`
    display: inline-block;
  `};
`

export const StyledImage = styled(Image)`
  max-height: 8rem;
  margin-right: 2rem;
`

export const TextContent = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
`

export const Author = styled(TextLabel)`
  float: right;
`
export const PostTitle = styled(Subtitle)`
  font-size: 1.2rem;
  text-transform: capitalize;
`

export const Sinopse = styled(Paragraph)`
  font-size: 1rem;
`

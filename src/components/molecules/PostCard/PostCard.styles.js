import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile } from '../../mediaQueries/default'

import TextLabel from '../../atoms/TextLabel/TextLabel'
import Image from '../../atoms/Image/Image'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Link from '../../atoms/Link/Link'

const color = ({ theme }) => theme.colors.ascendant[0]

const keepReadingColor = ({ theme }) => theme.colors.primary[0]

const backgroundColor = ({ theme }) => theme.colors.secondary[0]

const titleFont = ({ theme }) => theme.fonts.display

export const Wrapper = styled.div`
  display: flex;
  margin: 2rem;

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

export const Date = styled(TextLabel)`
  display: block;
  color: ${color};
`

export const Author = styled(TextLabel)`
  display: block;
`
export const PostTitle = styled(Link)`
  color: ${backgroundColor};
  font-family: ${titleFont};
  font-size: 2.4rem;
  line-height: 1.4;
  margin: 1.6rem 0;
`

export const Sinopse = styled(Paragraph)`
  font-size: 1rem;
  margin: .5rem 0;
`

export const KeepReading = styled(Link)`
  color: ${keepReadingColor};
  background-color: ${backgroundColor};
`

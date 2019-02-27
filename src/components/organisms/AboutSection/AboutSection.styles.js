import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile, tablet, desktop, desktopHd } from '../../mediaQueries/default'

import Subtitle from '../../atoms/Subtitle/Subtitle'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const ascendantColor = ({ theme }) => theme.colors.ascendant[0]
const primaryColor = ({ theme }) => theme.colors.primary[0]
const secondaryColor = ({ theme }) => theme.colors.secondary[0]

export const Wrapper = styled.section`
  padding: 4%;

  ${media.greaterThan(desktop)`
    padding: 4% 20%;
  `};

  ${media.greaterThan(desktopHd)`
    padding: 4% 25%;
  `};
`

export const Quote = styled(Subtitle)`
    font-weight: 400;
    text-transform: capitalize;
    color: ${ascendantColor};

    ${media.greaterThan(mobile)`
      font-size: 2.8rem!important;
      line-height: 1.2;
    `}
`

export const QuoteAuthor = styled.label`
  display: block;
  font-size: .8rem;
  line-height: 3;
  font-weight: 800;
  text-transform: uppercase;
  color: ${ascendantColor};

  ${media.greaterThan(mobile)`
    font-size: 1rem;
    line-height: 4;
  `};
`

export const Date = styled(Subtitle)`
  color: ${primaryColor};
`

export const Card = styled.div`
  margin: 2rem 0;

  ${media.greaterThan(tablet)`
    margin: 4rem 0;
  `};
`

export const Place = styled(Paragraph)`
  color: ${ascendantColor};
`

export const Category = styled(Paragraph)`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid ${secondaryColor};
`

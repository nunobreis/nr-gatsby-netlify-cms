import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile, tablet } from '../../mediaQueries/default'

import Link from '../../atoms/Link/Link'

const color = ({ theme }) => theme.colors.secondary[0]

const borderColor = ({ theme }) => theme.colors.primary[0]

export const Wrapper = styled.div`
  visibility: hidden;

  ${media.greaterThan(tablet)`
    visibility: visible;
    position: fixed;
    bottom: 0;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    background-color: transparent;
    text-align: left;
    width: 3rem;
    left: 1%;
    box-shadow: none;
  `};
`

export const StyledLink = styled(Link)`
  padding: .5rem;
  color: ${color};
  margin: auto;

  &:hover {
    background-color: ${borderColor};
  }

  ${media.greaterThan(mobile)`
    padding: 1rem;
  `}
`

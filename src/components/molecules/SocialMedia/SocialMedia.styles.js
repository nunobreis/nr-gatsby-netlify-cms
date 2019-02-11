import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

import Link from '../../atoms/Link/Link'

const color = ({ theme }) => theme.colors.primary[0]

const backgroundColor = ({ theme }) => theme.colors.bodyColor[0]

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${backgroundColor};
  box-shadow: 0 -1px 10px rgba(0, 0, 0, .1);
  padding: 1rem 0;

  ${media.greaterThan(tablet)`
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
  padding: 1rem;
  color: ${color};
  margin: auto;
`

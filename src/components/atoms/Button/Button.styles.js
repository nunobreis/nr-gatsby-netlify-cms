import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { mobile } from '../../mediaQueries/default'

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const color = ({ theme }) => theme.colors.white[0]

const backgroundColor = ({ theme }) => theme.colors.secondary[0]

const hover = ({ theme }) => theme.colors.grayscale[9]

const active = ({ theme }) => theme.colors.ascendant[0]

const styles = css`
  font-family: ${fontFamily};
  text-transform: capitalize;
  color: ${color};
  outline: none;
  background-color: ${backgroundColor};
  border: none;
  padding: .8rem 1.7rem;
  font-size: 1.2rem;
  border-radius: .4rem;
  width: 100%;

  &:hover {
    color: ${hover};
  }

  &:active {
    color: ${active};
  }

  ${media.greaterThan(mobile)`
    width: auto;
    font-size: 1.4rem;
  `};
`
export const StyledButton = styled.button`${styles};`

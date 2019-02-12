import styled from 'styled-components'

import media from 'styled-media-query'

import Link from '../../atoms/Link/Link'
import { fadeIn } from '../../animations/animations'

import { mobile } from '../../mediaQueries/default'

const color = ({ theme }) => theme.colors.primary[0]

const backgroundColor = ({ theme }) => theme.colors.secondary[0]

const fontFamily = ({ theme }) => theme.fonts.display

const closeButtonFont = ({ theme }) => theme.fonts.primary

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 2000;
  top: 0;
  background-color: ${backgroundColor};
  opacity: .9;
  padding: 2rem;
  animation: ${fadeIn} .35s;
  transition: opacity 0, 2s;
`

export const StyledLink = styled(Link)`
  font-family: ${fontFamily};
  font-size: 2rem;
  margin-bottom: 4rem;
  color: ${color};
  text-align: center;
  text-decoration: none;

  &:hover{
      text-decoration: line-through;
  }

  ${media.greaterThan(mobile)`
    font-size: 4rem;
  `}
`

export const CloseButton = styled(Link)`
  font-family: ${closeButtonFont};
  color: ${color};
  cursor: pointer;
  margin: 1rem auto;
  text-align: center;
  padding: 1rem 2rem;

  &:hover {
    background-color: ${color};
    transform: scale(.95);
    color: ${backgroundColor};
    transform: scale(1.05);
  }
`

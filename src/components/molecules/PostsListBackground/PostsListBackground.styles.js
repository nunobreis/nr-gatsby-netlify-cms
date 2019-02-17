import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

import BackgroundImage from 'gatsby-background-image'

export const StyledDiv = styled.div`padding: 15rem;`

export const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  max-height: 15rem;

  &::after {
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed; 
  }

  ${media.greaterThan(tablet)`
    max-height: 100%;
  `}
`

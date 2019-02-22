import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile } from '../../mediaQueries/default'

export const Wrapper = styled.div`
  visibility: hidden;

  ${media.greaterThan(mobile)`
  visibility: visible;
  &:hover {
    cursor: pointer;
    transform: scale(.95);
  }
`};
`

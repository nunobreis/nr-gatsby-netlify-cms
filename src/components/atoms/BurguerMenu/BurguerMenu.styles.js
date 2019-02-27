import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

export const Wrapper = styled.div`
  visibility: hidden;

  ${media.greaterThan(tablet)`
  visibility: visible;
  &:hover {
    cursor: pointer;
    transform: scale(.95);
  }
`};
`

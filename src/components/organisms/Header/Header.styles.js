import styled from 'styled-components'
import media from 'styled-media-query'

import { mobile } from '../../mediaQueries/default'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  padding: 1rem;

  ${media.greaterThan(mobile)`
    position: absolute;
  `};
`

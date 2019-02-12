import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

const fontColor = ({ theme }) => theme.colors.textColor[0]

const fontFamily = ({ theme }) => theme.fonts.primary

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  font-family: ${fontFamily};
  line-height: 1.6;
  color: ${fontColor};
  margin: 0;

  ${media.greaterThan(tablet)`
    font-size: 1.6rem;
    line-height: 1.8;    
  `};
`

const Paragraph = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)

Paragraph.propTypes = {
  children: PropTypes.node,
}

export default Paragraph

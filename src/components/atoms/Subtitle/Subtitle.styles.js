import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

const color = ({ theme }) => theme.colors.ascendant[0]

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const styles = css`
    color: ${color};
    text-transform: uppercase;
    font-family = ${fontFamily};
    font-size: 1.6rem;
    line-height: 1.8;
    font-weight: 300;
    margin: 0;

    ${media.greaterThan(tablet)`
      font-size: 2.4rem;
    `}
`

export const StyledHeading = styled.h6`${styles};`

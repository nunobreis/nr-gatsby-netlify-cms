import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

const color = ({ theme }) => theme.colors.secondary[0]

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const styles = css`
    color: ${color};
    text-transform: capitalize;
    font-family = ${fontFamily};
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;

    ${media.greaterThan(tablet)`
      font-size: 1.6rem;
    `}
`

export const StyledHeading = styled.h6`${styles};`

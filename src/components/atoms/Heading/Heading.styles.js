import { css } from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

const fontFamily = ({ theme }) => theme.fonts.display || 'serif'

const fontSizeLarge = ({ level }) => `${2 + 1 * (1 / level)}rem`

const fontSizeSmall = ({ level }) => `${1.2 + 1 * (1 / level)}rem`

const fontColor = ({ theme }) => theme.colors.textColor[0]

export const styles = css`
  font-family: ${fontFamily};
  font-size: ${fontSizeSmall};
  color: ${fontColor};

  ${media.greaterThan(tablet)`
    font-size: ${fontSizeLarge};
  `};
`

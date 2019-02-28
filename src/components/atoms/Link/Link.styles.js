import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const color = ({ theme }) => theme.colors.ascendant[0]

const styles = css`
  color: ${color};
`

export const StyledGatsbyLink = styled(GatsbyLink)`
  ${styles};
`

export const StyledATag = styled.a`
  ${styles};
`

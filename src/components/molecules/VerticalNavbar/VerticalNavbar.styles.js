import styled from 'styled-components'

import Link from '../../atoms/Link/Link'

const color = ({ theme }) => theme.colors.primary[0]

export const Wrapper = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  width: 2rem;
  position: absolute;
  bottom: 2%;
  left: 1%;
`

export const StyledLink = styled(Link)`
  padding: 1rem;
  color: ${color};
`

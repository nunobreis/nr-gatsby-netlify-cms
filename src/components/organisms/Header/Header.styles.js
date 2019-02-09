import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

const color = ({ theme }) => theme.colors.primary[0]

export const Logo = styled.p`
  font-family: ${fontFamily};
  color: ${color};
  font-size: 1.2rem;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`

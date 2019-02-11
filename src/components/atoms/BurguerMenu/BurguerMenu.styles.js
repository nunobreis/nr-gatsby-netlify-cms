import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    cursor: pointer;
  }
`

const backgroundColor = ({ theme }) => theme.colors.primary[0]

export const styles = css`
  height: .18rem;
  border-bottom: 1.2px solid ${backgroundColor};
  border-radius: 10rem;
  margin-bottom: .2rem;
`

export const FirstLine = styled.span`
  ${styles};
  width: 1.2rem;
`

export const SecondLine = styled.span`
  ${styles};
  width: 1rem;
`

export const ThirdLine = styled.span`
  ${styles};
  width: 1.4rem;
`

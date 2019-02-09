import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:hover {
    cursor: pointer;
  }
`

const backgroundColor = ({ theme }) => theme.colors.primary[0]

export const styles = css`
  background-color: ${backgroundColor};
  height: .2rem;
  border-radius: 10rem;
  margin-bottom: .3rem;
`

export const FirstLine = styled.div`
  ${styles};
  width: 1.2rem;
`

export const SecondLine = styled.div`
  ${styles};
  width: 1rem;
`

export const ThirdLine = styled.div`
  ${styles};
  width: 1.6rem;
`

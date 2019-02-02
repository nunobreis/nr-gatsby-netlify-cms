import React from 'react'

import { StyledButton } from './Button.styles'

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />

Button.defaultProps = {
  type: 'button',
}

export default Button

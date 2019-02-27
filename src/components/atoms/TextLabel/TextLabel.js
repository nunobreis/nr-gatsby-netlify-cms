import React from 'react'

const TextLabel = ({ children, ...props }) => (
  <label {...props}>{children}</label>
)

export default TextLabel

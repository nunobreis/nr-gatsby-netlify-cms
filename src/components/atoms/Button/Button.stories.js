import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module).add('renders a button', () => (
  <Button>Button</Button>
))

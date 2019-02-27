import React from 'react'
import { storiesOf } from '@storybook/react'

import Paragraph from './Paragraph'

storiesOf('Paragraph', module).add('renders a paragraph', () => (
  <Paragraph>Some paragraph</Paragraph>
))

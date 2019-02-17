import React from 'react'
import { storiesOf } from '@storybook/react'

import TextLabel from './TextLabel'

storiesOf('Text Label', module).add('renders a text label', () => (
  <TextLabel>Hi, I am a label</TextLabel>
))

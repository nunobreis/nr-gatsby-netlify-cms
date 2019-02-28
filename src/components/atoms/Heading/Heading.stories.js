import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from './Heading'

storiesOf('Heading', module).add(
  'renders a Heading with a specific level',
  () => <Heading level={1}>Hello World</Heading>
)

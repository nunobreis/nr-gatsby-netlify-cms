import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from './Image'

storiesOf('Image', module).add('renders an image', () => (
  <Image src="https://picsum.photos/200/300" alt="random test image" />
))

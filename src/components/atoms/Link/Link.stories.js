import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './Link'

storiesOf('Link', module)
  .add('renders a Gatsby Link', () => <Link to="/">Home</Link>)
  .add('renders an a tag', () => (
    <Link href="https://google.com">Go to Google</Link>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'

import PostCard from './PostCard'

storiesOf('Post Card', module).add('renders a Post Card', () => (
  <div>
    <PostCard />
    <PostCard />
  </div>
))

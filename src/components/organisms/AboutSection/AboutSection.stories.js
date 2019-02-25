import React from 'react'
import { storiesOf } from '@storybook/react'

import AboutSection from './AboutSection'

storiesOf('About Section', module).add('renders an about section', () => (
  <AboutSection />
))

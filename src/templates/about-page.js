import React from 'react'

import PostListLayout from '../components/Layouts/PostListLayout/PostListLayout'
import AboutSection from '../components/organisms/AboutSection/AboutSection'

export const AboutPageTemplate = () => {
  return <AboutSection />
}

const AboutPage = () => {
  return (
    <PostListLayout>
      <AboutPageTemplate />
    </PostListLayout>
  )
}

export default AboutPage

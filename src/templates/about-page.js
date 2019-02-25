import React from 'react'
import PropTypes from 'prop-types'

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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

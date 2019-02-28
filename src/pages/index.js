import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Typed from 'typed.js'

import { mobile } from '../components/mediaQueries/default'

import HomeLayout from '../components/Layouts/HomeLayout/HomeLayout'
import Heading from '../components/atoms/Heading/Heading'
import Paragraph from '../components/atoms/Paragraph/Paragraph'
import Subtitle from '../components/atoms/Subtitle/Subtitle'

const Wrapper = styled.section`
  padding: 0 4%;

  ${media.greaterThan(mobile)`
    padding: 0 6% 0 12%;
    font-size: 1.8rem;
    line-height: 1.7;    
  `};
`

const StyledHeading = styled(Heading)`
  margin-top: 1.5rem;
  margin-bottom: 0;
`

export default class IndexPage extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'Frontend Developer',
        'UI/UX Designer',
        'Product Designer',
        'UX Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <HomeLayout>
        <Wrapper>
          <StyledHeading level={1}>Hello World</StyledHeading>
          <Subtitle>
            I am a <span ref={el => (this.el = el)} />
          </Subtitle>
          <Paragraph>
            I am an experienced designer with a demonstrated history digital
            industry. I have worked as UI/UX Designer and a Frontend Developer.
            Recently I have been focusing on interaction design and programming
            mobile apps and desktop apps with React / Redux and React Native.
          </Paragraph>
        </Wrapper>
      </HomeLayout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

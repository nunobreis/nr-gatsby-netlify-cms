import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

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
  margin-bottom: 0;
`

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <HomeLayout>
        <Wrapper>
          <StyledHeading level={1}>Hey There,</StyledHeading>
          <Subtitle>I am UX developer</Subtitle>
          <Paragraph>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall.
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

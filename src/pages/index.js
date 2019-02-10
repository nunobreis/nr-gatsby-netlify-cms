import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { tablet } from '../components/mediaQueries/default'

import Layout from '../components/Layout'
import Heading from '../components/atoms/Heading/Heading'
import Paragraph from '../components/atoms/Paragraph/Paragraph'
import Subtitle from '../components/atoms/Subtitle/Subtitle'

const Wrapper = styled.section`
  padding: 0 4%;

  ${media.greaterThan(tablet)`
    padding: 0 6%;
    font-size: 1.8rem;
    line-height: 1.7;    
  `};
`

const CoverImage = styled.div`
  width: 100%;
  min-height: 21rem;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
`

const StyledHeading = styled(Heading)`
  margin-bottom: -1rem;
`

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Wrapper>
          <StyledHeading level={1}>Hey There,</StyledHeading>
          <CoverImage />
          <Subtitle>I am UX developer</Subtitle>
          <Paragraph>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall.
          </Paragraph>
        </Wrapper>
      </Layout>
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

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Heading from '../components/atoms/Heading/Heading'
import Paragraph from '../components/atoms/Paragraph/Paragraph'
import Subtitle from '../components/atoms/Subtitle/Subtitle'
import Image from '../components/atoms/Image/Image'
import Nuno from '../img/Nuno.png'

const Wrapper = styled.section`padding: 2rem 6rem;`
const StyledImage = styled(Image)`
  max-height: 12rem;
`

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Wrapper>
          <Heading level={1}>Hey There,</Heading>
          <StyledImage src={Nuno} alt="A picture of Nuno" />
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

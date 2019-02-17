import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { StyledDiv, StyledBackgroundImage } from './PostsListBackground.styles'

const PostsListBackground = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "postsListBackground.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledBackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <StyledDiv />
        </StyledBackgroundImage>
      )
    }}
  />
)

export default PostsListBackground

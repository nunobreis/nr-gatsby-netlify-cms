import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

import BackgroundImage from 'gatsby-background-image'

const StyledDiv = styled.div`
  padding: 15rem;

  ${media.greaterThan(tablet)`
    min-width: 50%;
    height: 100vh;
  `};
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;

  &::after {
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed; 
  }
`

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landingPicture.jpg" }) {
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

export default BackgroundSection

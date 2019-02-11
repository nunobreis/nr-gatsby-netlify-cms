import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import media from 'styled-media-query'

import { tablet } from './mediaQueries/default'

import theme, { GlobalStyle } from './theme/default'

import Header from './organisms/Header/Header'
import SocialMedia from './molecules/SocialMedia/SocialMedia'
import Metadata from './atoms/Metadata/Metadata'
import BackgroundSection from './molecules/BackgroundSection/BackgroundSection'

const Wrapper = styled.div`
  ${media.greaterThan(tablet)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
  `};
`

const Content = styled.div`
  max-width: 100%;

  ${media.greaterThan(tablet)`
    max-width: 50%;
  `};
`

const TemplateWrapper = ({ children, image }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <Metadata data={data} />
            <Header />
            <SocialMedia />
            <Wrapper>
              <BackgroundSection />
              <Content>{children}</Content>
            </Wrapper>
          </div>
        </ThemeProvider>
      </div>
    )}
  />
)

export default TemplateWrapper

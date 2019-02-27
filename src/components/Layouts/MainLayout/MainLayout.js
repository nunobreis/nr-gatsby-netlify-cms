import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyle } from '../../theme/default'

import Header from '../../organisms/Header/Header'
import SocialMedia from '../../molecules/SocialMedia/SocialMedia'
import Metadata from '../../atoms/Metadata/Metadata'
import MobileNavitagion from '../../molecules/MobileNavitagion/MobileNavitagion'

const PostListLayout = ({ children }) => (
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
            <MobileNavitagion />
            {children}
          </div>
        </ThemeProvider>
      </div>
    )}
  />
)

export default PostListLayout

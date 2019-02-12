import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    -moz-font-feature-settings: "liga" on;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    display: block;
    margin: 0;
    color: #4B4B5B;
    background-color: #f9f9f9;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`

const fonts = {
  primary: 'Montserrat, sans-serif',
  display: 'Noto Serif SC, serif',
}

const colors = {
  primary: [ '#64e7d5' ],
  secondary: [ '#17213e' ],
  ascendant: [ '#DF4A34' ],
  textColor: [ '#17213e' ],
  white: [ '#fff' ],
  bodyColor: [ '#f9f9f9' ],
  grayscale: [
    '#171717',
    '#2e2e2e',
    '#454545',
    '#5c5c5c',
    '#737373',
    '#8b8b8b',
    '#a2a2a2',
    '#b9b9b9',
    '#d0d0d0',
    '#e7e7e7',
  ],
  transparent: [ 'rgba(0, 0, 0, 0)' ],
}

const theme = {
  colors,
  fonts,
}

export default theme

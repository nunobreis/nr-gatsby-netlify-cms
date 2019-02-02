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
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    display: block;
    margin: 0;
    color: #4B4B5B;
    background-color: #FFF8F2;
  }
`

const fonts = {
  primary: 'Roboto, sans-serif',
  display: 'Noto Serif SC, serif',
}

const colors = {
  primary: [ '#0071D3' ],
  secondary: [ '#F68080' ],
  ascendant: [ '#E5F2FD' ],
  textColor: [ '#4B4B5B' ],
  white: [ '#fff' ],
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

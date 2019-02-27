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
    background-color: #fcecd7;
    height: 100%;
    h1, h2, h3, h4 {
      font-family: Anton, sans-serif;
      font-weight: 400;
    }
    h2 { 
      font-size: 2rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
    }

    li {
      font-size: 1rem;
      line-height: 2;
    }

    li > a {
      font-size: 1.2rem;
      color: #ae3e2e;
      text-decoration: underline;
    }

    blockquote {
      font-family: 'Anton, sans-serif';
      text-align: left;
      font-weight: 700;
    }
  }

  a {
    text-decoration: none;
  }
`

const fonts = {
  primary: 'Montserrat, sans-serif',
  display: 'Anton, sans-serif',
}

const colors = {
  primary: [ '#32b3a6' ],
  secondary: [ '#17213e' ],
  ascendant: [ '#ae3e2e' ],
  textColor: [ '#17213e' ],
  white: [ '#fff' ],
  bodyColor: [ '#fcecd7' ],
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

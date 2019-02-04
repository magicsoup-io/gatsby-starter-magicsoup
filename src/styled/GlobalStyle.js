import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    background-color: ${props => props.theme.defaultBackground};
    color: ${props => props.theme.colorPrimary};
    font-size: ${props => props.theme.fontBaseSize};
    font-family: ${props => props.theme.fontPrimary};
    font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;

    @media all and (min-width: 768px) {
      font-size: ${props => props.theme.fontBaseSize};
    }

    @media all and (min-width: 992px) {
      font-size: ${props => props.theme.fontBaseSize};
    }
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  a, a:link, a:visited, a:focus {
    text-decoration:none; 
    cursor: pointer;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
  }
`

export default () => (
  <div>
    <GlobalStyle />
  </div>
)

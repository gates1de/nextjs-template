import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: white;
    font-size:62.5%;
  }

  a {
    text-decoration: none;
    transition: 0.1s ease-in;

    :hover {
      opacity: 0.7;
    }
  }
`
export default GlobalStyle

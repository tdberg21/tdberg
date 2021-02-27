import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
  }
  
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    font-size: 1.125rem;
    font-family: "Arvo", Arial, Helvetica, sans-serif;
    line-height: 1.75rem;
    font-weight: 400;
  }

  a {
    color: white;
  }


`;

export default GlobalStyle;
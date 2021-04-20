import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root{
    width: 100vw;
    height: 100vh;
  }

  *, button, input {
    border: 0px;
    outline: 0px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: monospace;
    font-size: 16px;
    line-height: 24px;
  }
`;

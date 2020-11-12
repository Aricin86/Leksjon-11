import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
  }
  body {
    h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    }
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.6rem;
    }
  }
  ${normalize}
`;

import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
  }
  body {
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2.4rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.6rem;
    }
    h6 {
      font-size: 1.3rem;
      margin: 5px 0;
    }
    p {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }
  ${normalize}
`;

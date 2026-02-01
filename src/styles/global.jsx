import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* готовый reset: */
      ${emotionReset}

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      body {
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
      }

      p,
      li,
      span,
      a,
      input,
      textarea,
      button {
        font-family: 'Montserrat', sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Merriweather', serif;
      }
    `}
  />
);

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Делаем reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ol {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
}

/* Задаем глобальные стили */

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
`;

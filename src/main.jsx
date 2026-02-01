import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/styles/global.jsx';

import App from '@/App.jsx';
import { theme } from '@/styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      {/* `theme` — это единый объект с цветами, размерами, шрифтами и другими токенами дизайна.
       */}
      <GlobalStyles />{' '}
      {/* Подключаем styles через emotion <Global />. Это аналог твоего reset.css + global.css. */}
      <App />
    </ThemeProvider>
  </StrictMode>
);

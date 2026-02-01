import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import App from '@/App.jsx';
import { theme } from '@/styles/theme.js';
import { GlobalStyle } from './styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

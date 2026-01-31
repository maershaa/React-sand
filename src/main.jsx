import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import 'normalize.css';
import '@/styles/reset.css';
import '@/styles/global.css';
import App from '@/App.jsx';
import { theme } from '@/utils/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

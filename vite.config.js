import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/React-sand/',

  plugins: [react()],

  resolve: {
    alias: {
      // Alias — псевдоним пути (короткое имя вместо ../../..)
      '@': path.resolve(__dirname, './src'),
      // '@' указывает на папку src:
      // вместо '../../../../components/Button/Button'
      // используем '@/components/Button/Button'
    },
  },
});

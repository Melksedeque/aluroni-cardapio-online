import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, './src/styles'),
      'data': path.resolve(__dirname, './src/data'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/_variaveis.scss" as *;
          @use "styles/_breakpoints.scss" as *;
        `
      }
    }
  }
})

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    open: true,
    port: 3001,
  },
  preview: {
    host: 'localhost',
    port: 3001,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'PageAlpha',
      remotes: {
        pageAlpha: 'http://localhost:3002/assets/remoteEntry.js',
        pageBeta: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: [{ find: 'App', replacement: resolve(__dirname, 'src/App') }],
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

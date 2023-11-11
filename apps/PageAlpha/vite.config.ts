import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    open: true,
    port: 3002,
  },
  preview: {
    host: 'localhost',
    port: 3002,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'pagealpha',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

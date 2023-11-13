/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    open: true,
    port: 3002,
  },
  preview: {
    open: false,
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
        './App': './src/App/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: [
      { find: 'App', replacement: resolve(__dirname, 'src/App') },
      { find: 'services', replacement: resolve(__dirname, 'src/services') },
      { find: 'hooks', replacement: resolve(__dirname, 'src/hooks') },
    ],
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  envPrefix: 'CHALLENGE_N5_',
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts',
  },
});

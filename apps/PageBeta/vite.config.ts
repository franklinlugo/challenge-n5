import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3003,
  },
  preview: {
    host: 'localhost',
    port: 3003,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'pagebeta',
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

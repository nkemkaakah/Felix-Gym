import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Add alias for resolving paths
    },
  },
  assetsInclude: ['**/*.JPG'], // Add this line to include .JPG files as assets
});

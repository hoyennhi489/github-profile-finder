import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { publish } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react(),
    publish()
  ],
  base: '/github-profile-finder/',
});
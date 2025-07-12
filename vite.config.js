// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Blog-web/", // 👈 This is your GitHub repo name!
  plugins: [react()],
});

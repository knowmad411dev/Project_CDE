import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Project_CDE/', // Update with your repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

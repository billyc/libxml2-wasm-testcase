import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  build: { target: 'esnext' },
  esbuild: { target: 'esnext' },
  optimizeDeps: { esbuildOptions: { target: 'esnext' } },
  plugins: [vue()],
});

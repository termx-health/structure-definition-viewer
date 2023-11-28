import {resolve} from 'path';
import {defineConfig} from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});

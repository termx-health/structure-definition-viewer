// https://vitejs.dev/guide/build.html#library-mode
import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'structure-definition-viewer',
      fileName: 'structure-definition-viewer',
      formats: ['es', 'cjs', 'umd']
    },
  },
  plugins: [dts()],
});

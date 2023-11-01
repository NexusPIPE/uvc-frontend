
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import {copyFileSync} from 'fs';

copyFileSync('dist/index.d.ts','vanilla/index.d.ts')

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'UVC',
      fileName: 'index',
      formats: [
        'es',
        'cjs',
        'iife',
        'umd',
      ],
    },
    outDir: 'vanilla',
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});

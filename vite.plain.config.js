
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // entry: resolve(__dirname, 'dist/index.js'),
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

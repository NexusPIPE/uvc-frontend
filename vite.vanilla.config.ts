import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'UVC',
      fileName: 'index',
      formats: ['es', 'cjs', 'iife', 'umd'],
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
  esbuild: {
    banner: `
//     ,,,                                
//   ,,,                                  
//    ,,     ,,,,,,                       
//     ,,          ,,,                    
//      ,,,           ,,                   _   _                     ______ ___________ _____ 
//       ,,,            ,,,               | \\ | |                    | ___ \\_   _| ___ \\  ___|
//         ,,,             ,,             |  \\| | _____  ___   _ ___ | |_/ / | | | |_/ / |__  
//          ,,,             .,,           | . \` |/ _ \\ \\/ / | | / __||  __/  | | |  __/|  __| 
//            ,,,             ,,          | |\\  |  __/>  <| |_| \\__ \\| |    _| |_| |   | |___ 
//              ,,,             ,,        \\_| \\_/\\___/_/\\_\\\\__,_|___/\\_|    \\___/\\_|   \\____/ 
//                ,,,            ,,                                                           
//                  ,,,           ,,      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//                     ,,,        ,,,     ┃ UVC Frontend Vanilla JS Integration                 ┃
//                       ,,,,    ,,,      ┃   Source: https://github.com/NexusPIPE/uvc-frontend ┃
//                          ,,,,      ,   ┃   NPM: https://npm.im/@nexusuvc/frontend            ┃
//                             ,,,,,,,,   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
//                                  ,,    `.trim(),
  },
});

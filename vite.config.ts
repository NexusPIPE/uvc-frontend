import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
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
//                     ,,,        ,,,     ┃ UVC Frontend Svelte Integration                     ┃
//                       ,,,,    ,,,      ┃   Source: https://github.com/NexusPIPE/uvc-frontend ┃
//                          ,,,,      ,   ┃   NPM: https://npm.im/@nexusuvc/frontend            ┃
//                             ,,,,,,,,   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
//                                  ,,    `.trim(),
  },
});

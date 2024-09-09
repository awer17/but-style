import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'

export default {
  plugins: [
    Inspect()
  ],
  build: {
    rollupOptions:{
      input: {
        mailn: resolve(__dirname,'insex.html'),
        estimat: resolve(__dirname, 'estimat/index.html'),
      }
    }
  },
  css: {
    devSourcemap: true,
  },
}
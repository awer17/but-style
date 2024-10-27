import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'

export default {
  plugins: [
    Inspect()
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions:{
      input: {
        mailn: resolve(__dirname,'index.html'),
        estimat: resolve(__dirname, 'estimat/index.html'),
        services: resolve(__dirname, 'services/index.html'),
      }
    }
  },

}
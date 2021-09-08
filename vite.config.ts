import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import path from 'path/posix';
const {resolve} = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find:'@',
      replacement: resolve(__dirname,'src')
    }]
  },
  plugins: [reactRefresh()]
})

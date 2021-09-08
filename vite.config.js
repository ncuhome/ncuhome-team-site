import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path';

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

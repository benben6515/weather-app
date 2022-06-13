import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  server: {
    open: true,
    proxy: {
      '/api-geo': {
        target: 'https://api.openweathermap.org/geo/1.0',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-geo/, '')
      },
      '/api-data': {
        target: 'https://api.openweathermap.org/data/3.0',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-data/, '')
      }
    }
  }
})

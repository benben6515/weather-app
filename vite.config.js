import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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

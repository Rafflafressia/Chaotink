import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // other entry points
      },
      output: {
        dir: 'dist',
      },
    },
  },

  publicDir: "src",
})

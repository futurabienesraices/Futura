import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/centro-financiero/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

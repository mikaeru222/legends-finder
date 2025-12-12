import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Firebase Hosting ではルート配信なので "/" にする
  base: '/',
  plugins: [react()],
  server: { port: 5173, host: true }
})

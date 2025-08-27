import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/legends-finder/',  // ★ GitHub Pagesのサブパス（リポ名）
  plugins: [react()],
  server: { port: 5173, host: true }
})

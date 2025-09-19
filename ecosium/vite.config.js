import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // 👈 this exposes on your LAN (same as --host)
    port: 5173,
  },
})

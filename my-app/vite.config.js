import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',// ✅ sangat penting untuk deploy di root domain (Netlify)
  plugins: [react(), tailwindcss()],
})

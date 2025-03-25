import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 Usamos '/' porque es dominio raíz
  plugins: [react()],
})

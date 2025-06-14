import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 this base must match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/global-vehicle-info/'
})


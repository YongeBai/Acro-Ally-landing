import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  base: '/Acro-Ally-landing/',
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
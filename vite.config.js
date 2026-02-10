import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss(), ],
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  }
=======
  // root: resolveConfig(__dirname, 'src'),
  plugins: [react(), tailwindcss()],
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
>>>>>>> ba84e11bae81e6021ffcf74bcea0eda0fb55e844
})

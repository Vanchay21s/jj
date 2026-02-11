import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  
=======
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
>>>>>>> e184cfb267c322e235f727d2e60f1140154fc5c5
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

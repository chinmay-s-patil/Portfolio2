import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Aggressive code splitting - each section loads on demand
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    },
    // Warn if a chunk exceeds 1MB
    chunkSizeWarningLimit: 1000,
  },
  // Public dir works the same as Next.js - your /public assets need no changes
  publicDir: 'public',
})

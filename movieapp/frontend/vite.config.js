import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Expose to external connections
    port: 3031,        // Ensure it's set correctly
    strictPort: true   // Prevents random port assignment
  }
})

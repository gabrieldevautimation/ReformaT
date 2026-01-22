import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Headers de segurança para desenvolvimento
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http://i.pravatar.cc https://n8n.srv1218600.hstgr.cloud; media-src 'self' data: blob: https:; connect-src 'self' https://n8n.srv1218600.hstgr.cloud; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
    }
  },

  // Build otimizado e seguro
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,     // Remove console.log em produção
        drop_debugger: true,    // Remove debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Source maps apenas em desenvolvimento
    sourcemap: false,
    rollupOptions: {
      output: {
        // Obfusca nomes de chunks
        manualChunks: undefined
      }
    }
  }
})

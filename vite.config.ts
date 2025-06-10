import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const APP_DEFAULT_PORT = '3000'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const port = parseInt(env.VITE_APP_PORT ?? APP_DEFAULT_PORT, 10)
  return {
    server: {
      port,
    },
    build: {
      target: 'esnext',
    },
    plugins: [
      tailwindcss(),
      react(),
      tsconfigPaths({ root: './' }),
    ],
    define: {
      VITE_PORT: JSON.stringify(env.VITE_PORT),
    },
  }
})

import daisyUI from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  plugins: [daisyUI],
} satisfies Config

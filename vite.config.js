import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter as a Tailwind font
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})

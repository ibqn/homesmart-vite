import path from 'path'
import { defineConfig } from 'vite'

import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      'tailwind.config.cjs': path.resolve(__dirname, 'tailwind.config.cjs'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.cjs'],
  },
})

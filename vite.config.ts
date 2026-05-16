import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/calendar/',
  plugins: [svelte()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})

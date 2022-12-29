import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [importAssets()],
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
}

export default config

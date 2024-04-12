import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { importAssets } from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [importAssets()],
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
}

export default config

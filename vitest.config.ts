import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    deps: {
        /**
         * One proposed solution is to add the import to deps.inline (see https://github.com/vitest-dev/vitest/issues/1395)
         */
          inline: [/vitest-svelte-bug-repro\/dist/],
    }
  },
})
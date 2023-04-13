import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
        /**
         * One proposed solution is to add the import to deps.inline (see https://github.com/vitest-dev/vitest/issues/1395)
         * Easy way to do this would be to set deps.inline to "true", but vitest fails if the value is true (TypeError: Cannot destructure property 'AsymmetricMatcher' of '__vite_ssr_import_1__.plugins' as it is undefined)
         */
        inline: [] // true
    }
  },
})
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {},
  {
    name: 'tailwind/yaml/rules',
    files: ['**/*.yaml', '**/*.yml'],
    rules: {
      'yaml/plain-scalar': ['off'],
    },
  },
  {
    name: 'nuxt-studio/md/rules',
    files: ['**/*.md'],
    rules: {
      'no-irregular-whitespace': ['off'],
    },
  },
  nuxt,
)

import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  next: true,
  react: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    braceStyle: 'stroustrup', // '1tbs', or 'allman'
  },
})

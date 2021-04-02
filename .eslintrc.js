module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    'jest/globals': true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}

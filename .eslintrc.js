module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "prettier/@typescript-eslint",
  ],
  env: { node: true, es6: true },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        singleQuote: true,
        semi: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
    }
  ]
};

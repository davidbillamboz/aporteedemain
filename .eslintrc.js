module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/core-modules': [],
  },
};

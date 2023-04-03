module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'arrow-body-style': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
  },
};

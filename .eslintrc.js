module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/require-default-props': 0,
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-shadow': 0,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  globals: {
    graphql: true,
    __DEV__: true,
  },
  env: {
    browser: true,
    es6: true,
  },
};

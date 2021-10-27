module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'max-len': ['error', 200, 4, { 'ignoreComments': true }],
      'func-names': ['error', 'never'],
      'indent': ['error', 4, { 'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral'] }],

    },
    settings: {
        'import/resolver': {
          'node': {
            'extensions': ['.js', '.jsx', '.ts', '.tsx']
          }
        }
    },
  };

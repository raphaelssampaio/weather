// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning(doesn’ t affect exit code)
// "error" or 2 - turn the rule on as an error(exit code is 1 when triggered)
module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  plugins: ['react', 'react-native'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/no-did-mount-set-state': 0,
    'react/no-unescaped-entities': 0,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    semi: 0,
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-duplicate-props': 2,
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false,
  },
}

module.exports = {
  globals: {
    server: true
  },
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      decorators: true
    }
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true
  },
  rules: {}
}

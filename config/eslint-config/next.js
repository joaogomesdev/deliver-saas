/** @type {import('eslint').Linter.Config} */
module.export = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': "error"
  }
}
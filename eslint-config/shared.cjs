const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

const lintIgnores = ['www/**', 'coverage/**', '**/*.min.js'];
const sourceFiles = ['src/**/*.{js,jsx,ts,tsx}'];
const typescriptFiles = ['src/**/*.{ts,tsx}'];

const sourceLanguageOptions = {
  ecmaVersion: 2020,
  globals: {
    ...globals.browser,
    ...globals.commonjs,
    ...globals.es2021,
    ...globals.jest,
    ...globals.node,
  },
  parser: tsParser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  sourceType: 'module',
};

module.exports = {
  lintIgnores,
  sourceFiles,
  sourceLanguageOptions,
  typescriptFiles,
};


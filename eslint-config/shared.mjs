import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export const lintIgnores = ['www/**', 'coverage/**', '**/*.min.js'];
export const sourceFiles = ['src/**/*.{js,jsx,ts,tsx}'];
export const typescriptFiles = ['src/**/*.{ts,tsx}'];

export const sourceLanguageOptions = {
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



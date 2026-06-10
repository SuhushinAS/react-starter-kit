const globals = require('globals');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

const eslintRules = require('./eslint-config/rules/eslint.json').rules;
const importRules = require('./eslint-config/rules/import.json').rules;
const jsxA11yRules = require('./eslint-config/rules/jsx-a11y.json').rules;
const prettierRules = require('./eslint-config/rules/prettier.json').rules;
const reactRules = require('./eslint-config/rules/react.json').rules;
const tsRules = require('./eslint-config/rules/typescript.json').rules;

module.exports = [
  {
    ignores: ['www/**', 'coverage/**', '**/*.min.js'],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
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
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintRules,
      ...importRules,
      ...jsxA11yRules,
      ...prettierRules,
      ...reactRules,
      ...tsRules,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
    },
  },
];


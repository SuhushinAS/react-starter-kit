import tsPlugin from '@typescript-eslint/eslint-plugin';

import {sourceFiles, typescriptFiles} from './shared.mjs';

export default [
  {
    files: sourceFiles,
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 2,
      '@typescript-eslint/ban-ts-comment': 2,
      '@typescript-eslint/consistent-type-assertions': 2,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-array-constructor': 2,
      '@typescript-eslint/no-empty-function': 2,
      '@typescript-eslint/no-empty-interface': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/no-misused-new': 2,
      '@typescript-eslint/no-namespace': 2,
      '@typescript-eslint/no-non-null-assertion': 2,
      '@typescript-eslint/no-this-alias': 2,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-use-before-define': 2,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/prefer-namespace-keyword': 2,
      '@typescript-eslint/triple-slash-reference': 2,
    },
  },
  {
    files: typescriptFiles,
    rules: {
      'no-undef': 'off',
    },
  },
];

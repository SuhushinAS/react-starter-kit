import importPlugin from 'eslint-plugin-import';

import {sourceFiles} from './shared.mjs';

export default {
  files: sourceFiles,
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/dynamic-import-chunkname': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-anonymous-default-export': 0,
    'import/no-duplicates': 2,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 2,
    'import/no-named-default': 2,
    'import/no-useless-path-segments': [
      2,
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 2,
    'import/order': [
      2,
      {
        groups: [],
      },
    ],
  },
};

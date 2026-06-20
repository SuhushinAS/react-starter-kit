import coreConfig from './core.mjs';
import importConfig from './import.mjs';
import jsxA11yConfig from './jsx-a11y.mjs';
import reactConfig from './react.mjs';
import { lintIgnores } from './shared.mjs';
import typescriptConfig from './typescript.mjs';

export default [
  {
    ignores: lintIgnores,
  },
  coreConfig,
  importConfig,
  jsxA11yConfig,
  reactConfig,
  ...typescriptConfig,
];

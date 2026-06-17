const coreConfig = require('./core.cjs');
const importConfig = require('./import.cjs');
const jsxA11yConfig = require('./jsx-a11y.cjs');
const reactConfig = require('./react.cjs');
const {lintIgnores} = require('./shared.cjs');
const typescriptConfig = require('./typescript.cjs');

module.exports = [
  {
    ignores: lintIgnores,
  },
  coreConfig,
  importConfig,
  jsxA11yConfig,
  reactConfig,
  ...typescriptConfig,
];


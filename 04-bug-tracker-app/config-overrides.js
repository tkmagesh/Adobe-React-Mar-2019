
const { override, addBabelPlugin, addDecoratorsLegacy, disableEsLint } = require('customize-cra');

module.exports = override(
	addBabelPlugin('babel-plugin-styled-components'),
	addDecoratorsLegacy(),
	disableEsLint()
);
module.exports = {
	extends: 'preact',
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		jest: { version: 26 },
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	ignorePatterns: ['build/*'],
};

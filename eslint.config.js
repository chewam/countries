import eslintPluginSvelte from 'eslint-plugin-svelte';

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	{
		rules: {
			// override/add rules settings here, such as:
			// 'svelte/rule-name': 'error'
		}
	},
	eslintPluginPrettierRecommended
];
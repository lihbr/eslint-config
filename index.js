// @ts-check
import antfu from "@antfu/eslint-config"
import defu from "defu"

/**
 * @type {Parameters<typeof antfu>[0]} - `@lihbr/eslint-config` configuration.
 */
const lihbrConfig = {
	stylistic: {
		quotes: "double",
		indent: "tab",
		overrides: {
			"style/arrow-parens": ["error", "always"],
			"style/brace-style": ["error", "1tbs"],
			"style/operator-linebreak": [
				"error",
				"after",
				{ overrides: { "?": "before", ":": "before" } },
			],
			"curly": ["error", "all"],
			"ts/consistent-type-definitions": ["error", "type"],
			"ts/explicit-module-boundary-types": "error",
		},
	},
}

/**
 * @type {typeof antfu} - `@lihbr/eslint-config`
 */
// Might be fun to see this rule disabled here, but can't type that further in JavaScript~
// eslint-disable-next-line ts/explicit-module-boundary-types
function lihbr(config, ...args) {
	return antfu(defu(config, lihbrConfig), ...args)
}

export { lihbr }
export default lihbr

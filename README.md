# @lihbr/eslint-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Conventional Commits][conventional-commits-src]][conventional-commits-href]
[![License][license-src]][license-href]

Lucie's ESLint config preset ***powered by and built on top of*** [Anthony's ESLint config preset][antfu-eslint-config].

## Install

Install dependencies:

```bash
pnpm install --dev eslint @lihbr/eslint-config
```

Create `eslint.config.js` in your project root:

```javascript
// @ts-check
import lihbr from "@lihbr/eslint-config"

export default lihbr()
```

Finally, add scripts in your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	}
}
```

## Customization

Please refer to [`@antfu/eslint-config`'s documentation][antfu-eslint-config-config]. `lihbr` uses the same interface as `antfu` so it can be customized it the same way.

## Contributing

Whether you're helping me fix bugs, improve the docs, or spread the word, I'd love to have you as a contributor!

**Asking a question**: [Open a new topic][repo-question] on GitHub Discussions explaining what you want to achieve / your question. I'll try to get back to you shortly.

**Reporting a bug**: [Open an issue][repo-bug-report] explaining your application's setup and the bug you're encountering.

**Suggesting an improvement**: [Open an issue][repo-feature-request] explaining your improvement or feature so we can discuss and learn more.

**Submitting code changes**: For small fixes, feel free to [open a PR][repo-pull-requests] with a description of your changes. For large changes, please first [open an issue][repo-feature-request] so we can discuss if and how the changes should be implemented.

## License

[MIT][license] License © 2024-PRESENT [Lucie Haberer][lihbr-github]

<!-- Links -->
[antfu-eslint-config]: https://github.com/antfu/eslint-config
[antfu-eslint-config-config]: https://github.com/antfu/eslint-config#customization
[license]: ./LICENSE
[lihbr-github]: https://github.com/lihbr

<!-- Contributing -->

[repo-question]: https://github.com/lihbr/eslint-config/discussions
[repo-bug-report]: https://github.com/lihbr/eslint-config/issues/new?assignees=&labels=bug&template=bug_report.md&title=
[repo-feature-request]: https://github.com/lihbr/eslint-config/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=
[repo-pull-requests]: https://github.com/lihbr/eslint-config/pulls

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@lihbr/eslint-config?style=flat&colorA=131010&colorB=54669c
[npm-version-href]: https://npmjs.com/package/@lihbr/eslint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@lihbr/eslint-config?style=flat&colorA=131010&colorB=a54a5e
[npm-downloads-href]: https://npmjs.com/package/@lihbr/eslint-config
[conventional-commits-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=flat&colorA=131010&colorB=f27602&logo=conventionalcommits&logoColor=faf1f1
[conventional-commits-href]: https://conventionalcommits.org
[license-src]: https://img.shields.io/github/license/lihbr/eslint-config.svg?style=flat&colorA=131010&colorB=759f53
[license-href]: https://github.com/lihbr/eslint-config/blob/master/LICENSE

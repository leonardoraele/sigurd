# Content model and navigation

## Top-level sections

The initial site structure is organized into six primary areas:

- **Home** for the library overview and documentation entry points
- **Getting Started** for onboarding and first use
- **Guides** for the main workflows and architectural patterns
- **Examples** for practical, copyable snippets
- **API Reference** for generated documentation of the public Sigurd surface
- **FAQ / Caveats** for edge cases, surprising behavior, and common mistakes

## Minimum page inventory

### Home
- `/`

### Getting Started
- `/getting-started/installation`
- `/getting-started/quickstart`
- `/getting-started/core-concepts`

### Guides
- `/guides/creating-a-store`
- `/guides/global-singletons`
- `/guides/react-context`
- `/guides/nested-stores`
- `/guides/effects`
- `/guides/store-hooks`
- `/guides/lifecycle-and-disposal`

### Examples
- `/examples/counter`
- `/examples/context-store`
- `/examples/nested-store`
- `/examples/mutable-vs-readonly`

### API Reference
- `/api/`
- `/api/reference/` and generated child pages

### FAQ / Caveats
- `/faq/caveats`

## Navigation priorities

Navigation is optimized for two common paths:

1. **new users** who need installation, a quickstart, and an explanation of the `using` model
2. **existing users** who need to look up a hook, signal primitive, or behavioral detail quickly

For that reason:

- Getting Started is elevated in the top navigation
- API Reference is always one click away
- Guides are grouped by workflow rather than by source file

## README relationship

The README remains a concise repository landing page. It should:

- explain what Sigurd is
- show a minimal usage example
- link readers to the published documentation site for full onboarding and reference material

Long-form setup, design rationale, examples, and API detail now live in the docs site instead of being duplicated in the README.

# Documentation Information Architecture

This document defines the initial page structure and navigation model for the Sigurd documentation site.

## Goals

- Support quick onboarding for developers who are new to Sigurd
- Make API lookup predictable once users already know what they need
- Reuse the current README as seed content instead of rewriting everything from scratch
- Keep the initial site small and focused on Sigurd-specific concepts

## Top-level sections

### Home

Landing page for the package overview, value proposition, and links into the rest of the documentation.

### Getting Started

Short onboarding flow that gets a user from installation to their first working store and component.

### Guides

Task-oriented and concept-oriented documentation for the patterns that need more explanation than a quick start.

### Examples

Runnable or copyable examples that demonstrate complete usage patterns.

### API Reference

Reference-first section for exported hooks and entrypoint behavior.

### FAQ / Caveats

Focused answers for the rules and pitfalls that are easy to miss during onboarding.

## Initial page inventory

| Section | Page | Purpose | Seed material |
| --- | --- | --- | --- |
| Home | `/` | Introduce Sigurd, summarize what it does, and route users to onboarding or reference content. | README package summary and badges |
| Getting Started | `/getting-started/installation` | Explain installation and peer dependency expectations. | README Installation |
| Getting Started | `/getting-started/first-store` | Show the smallest complete store + hook + component flow. | README Usage example |
| Getting Started | `/getting-started/rendering-with-signals` | Explain how tracked renders work and what users should expect from rerenders. | README explanation after the example |
| Guides | `/guides/store-hooks` | Explain how to wrap stores with `useSignalStore()` and when to use `useMutableSignalStore()`. | `src/hooks.ts`, `src/hooks.test.tsx` |
| Guides | `/guides/effects-and-observation` | Explain `useSignalEffect()` and `useSignalObserverToken()` with lifecycle guidance. | `src/hooks.ts`, `src/hooks.test.tsx` |
| Guides | `/guides/composing-stores` | Document the supported patterns called out in the README: global stores, React context, and nested stores. | README Usage introduction |
| Examples | `/examples/counter` | Basic counter example for the quickest “hello world” path. | README Usage example |
| Examples | `/examples/context-store` | Show how to distribute a store through React context. | README Usage introduction |
| Examples | `/examples/nested-stores` | Show one store nested inside another. | README Usage introduction |
| API Reference | `/api` | Explain what Sigurd exports and how the reference section is organized. | `src/index.ts` |
| API Reference | `/api/hooks` | Reference page for Sigurd-specific hooks: `useSignalEffect()`, `useSignalStore()`, `useMutableSignalStore()`, and `useSignalObserverToken()`. | `src/hooks.ts` |
| API Reference | `/api/re-exported-signals` | Explain that Sigurd re-exports `@leonardoraele/signals` from the package entrypoint and link to upstream reference material instead of duplicating it. | `src/index.ts` |
| FAQ / Caveats | `/faq/using-store-values` | Explain why store tokens must be assigned to a `using` variable. | README Usage explanation, `src/hooks.ts` |
| FAQ / Caveats | `/faq/disposal-and-lifecycle` | Explain disposal requirements and what can go wrong if they are ignored. | `src/hooks.ts` |
| FAQ / Caveats | `/faq/readonly-vs-mutable-store-hooks` | Clarify the difference between readonly and mutable store wrappers. | `src/hooks.ts` |

## Navigation model

### Primary navigation priority

1. Home
2. Getting Started
3. Guides
4. Examples
5. API Reference
6. FAQ / Caveats

This order favors onboarding first, then deeper conceptual material, then lookup-oriented reference.

### Sidebar priorities

- **Getting Started:** keep the sidebar linear and short so users can move from installation to first success without branching
- **Guides:** order pages by increasing conceptual depth, starting with store hooks and ending with composition patterns
- **Examples:** lead with the counter example, then context, then nested stores
- **API Reference:** show the API overview first, then hooks, then re-exported signals
- **FAQ / Caveats:** order entries by how likely they are to block new users, starting with the `using` requirement

### Cross-linking rules

- Every Getting Started page should link forward to the next onboarding step and sideways to the relevant example
- Guide pages should link to the matching API reference entries
- FAQ / Caveats entries should be linked directly from any page that introduces a rule with sharp edges

## README content mapping

The current README should seed the site content as follows:

- **Project title, summary, and badges** -> Home
- **Installation** -> Getting Started / Installation
- **Usage example (`CounterStore`, `useCounterStore()`, component example)** -> Getting Started / First Store and Examples / Counter
- **Explanation of tracked renders** -> Getting Started / Rendering with Signals
- **Explanation that the store must be assigned to a `using` variable** -> FAQ / Caveats / Using Store Values
- **Current API placeholder** -> API Reference overview
- **License** -> remain in the repository README and footer, not a standalone documentation page in the initial site

The README should remain a concise package entry point after the site exists, with short sections and links into the documentation site for full guidance.

## API reference placement decision

API Reference should be a top-level section in the main navigation, not nested under Guides or Getting Started.

That placement supports two distinct user journeys:

- new users can ignore it until they finish the onboarding flow
- returning users can jump directly to the exported hooks or entrypoint behavior

The initial API reference should focus on Sigurd-owned APIs and explicitly document that the package also re-exports `@leonardoraele/signals`, linking to upstream reference material instead of duplicating a second full signal reference inside this site.

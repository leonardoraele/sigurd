---
layout: home

hero:
  name: Sigurd
  text: React state management built around signals
  tagline: A lightweight library for building stores, tracking signal reads during render, and re-rendering React components automatically.
  actions:
    - theme: brand
      text: Get started
      link: /getting-started/installation
    - theme: alt
      text: API reference
      link: /api/
    - theme: alt
      text: GitHub
      link: https://github.com/leonardoraele/sigurd

features:
  - title: Small public surface
    details: Sigurd combines a small set of React hooks with first-party signal primitives so the learning curve stays low.
  - title: Source-backed API docs
    details: Generated API reference stays in sync with the codebase and is complemented by handwritten guides.
  - title: Explicit lifecycle model
    details: The docs call out the `using` requirement, disposal rules, and render-tracking behavior up front.
---

## What Sigurd gives you

Sigurd helps you model state as plain classes or objects whose fields are signals. Components subscribe by reading those signals during render, and Sigurd rerenders them when the relevant values change.

The package intentionally treats signal primitives as part of the Sigurd API. Consumers can install `sigurd`, import everything they need from `sigurd`, and ignore the implementation dependency entirely.

## Documentation map

- **Getting Started** explains installation, the mental model, and the first working store.
- **Guides** cover the main library workflows and design choices.
- **Examples** provide static, copyable snippets for common patterns.
- **API Reference** is generated from source comments so signatures and behavior stay aligned with the library.

## Stable documentation workflow

This repository now keeps documentation in three layers:

1. handwritten narrative docs in `/docs`
2. source comments for exported APIs in `/home/runner/work/sigurd/sigurd/src`
3. generated reference pages under `/home/runner/work/sigurd/sigurd/docs/api/reference`

When the API changes, update the source comments and regenerate the reference during the docs build.

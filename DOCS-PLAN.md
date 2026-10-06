# Sigurd Documentation Plan

This document defines Sigurd's long-term documentation model before site tooling or content is added.

## Documentation architecture

Sigurd's long-term documentation model is:

- **VitePress** for the documentation site
- **TypeDoc** for generated API reference
- **GitHub Pages** for hosting
- **Static examples only**, with no live playground requirement
- **Hand-written guides** for concepts, tutorials, and recipes
- **Generated API docs** for the public exported surface

## Goals and audience

The documentation site should help:

- **New users** understand what Sigurd is, when to use it, and how to get started quickly
- **Application developers** learn the recommended patterns for stores, hooks, and component usage
- **Existing users** find authoritative API reference for the current public surface
- **Contributors** understand the intended separation between conceptual docs and generated API docs

## Top-level content categories

The site should be organized around these top-level categories:

1. **Introduction**
   - What Sigurd is
   - Core ideas and trade-offs
   - Installation and quick start
2. **Guides**
   - Defining stores
   - Using stores in React components
   - Composition patterns and recommended usage
3. **Examples**
   - Small static examples that demonstrate common patterns
4. **API Reference**
   - Generated reference for Sigurd's public exports
5. **Project information**
   - Release notes, contribution guidance, and related project links as needed

## Hand-written vs generated documentation

- **Hand-written docs** should explain concepts, workflows, design intent, and best practices.
- **Generated API docs** should cover the public exported API from the `sigurd` package.
- Guides should link to API reference entries when readers need exact signatures or type details.
- API reference should not try to replace guides; it should complement them.

## Re-exported APIs are documented as Sigurd APIs

Sigurd currently re-exports symbols from `@leonardoraele/signals` through its public entrypoint.

For documentation purposes, any symbol exported from `sigurd` must be presented as part of **Sigurd's first-party public API**, even when its implementation originates in `@leonardoraele/signals`.

This means:

- generated docs should be anchored to the `sigurd` package entrypoint
- re-exported symbols should appear alongside native Sigurd exports in the API reference
- guides should refer readers to the Sigurd API reference, not to `@leonardoraele/signals`, unless external implementation details are specifically relevant for contributors
- `@leonardoraele/signals` should be treated as an implementation detail in user-facing documentation

## README vs documentation site

The README should stay focused on repository and package discovery:

- short project summary
- installation
- a minimal usage example
- links to the documentation site and other project resources

The documentation site should contain the durable learning material:

- conceptual explanations
- tutorials and guides
- examples
- complete API reference

This README should not grow into the full documentation site over time; deeper content should move to the site once it exists.

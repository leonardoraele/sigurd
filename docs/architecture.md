# Documentation architecture

## Stack decisions

Sigurd's documentation site is built with the following stack:

- **VitePress** for the static documentation site shell
- **TypeDoc** plus **typedoc-plugin-markdown** for generated API reference pages
- **GitHub Pages** for hosting and deployment
- **GitHub Actions** for publishing and pull request validation

## Site scope

The published site is intentionally documentation-first. It exists to:

- introduce the library clearly
- explain the main usage patterns with handwritten guides
- publish generated API reference from source comments
- provide static examples that are easy to copy and adapt

The site does **not** attempt to be a marketing-heavy product site and does **not** depend on live playgrounds.

## Source-of-truth split

Sigurd's docs are maintained from three different sources, each with a single responsibility:

- **Handwritten markdown pages** explain concepts, workflows, examples, and caveats.
- **TSDoc comments in exported source files** describe signatures, runtime expectations, and API contracts.
- **Generated API markdown** mirrors the public API surface and is regenerated during docs builds.

This split keeps guides readable while preventing API reference drift.

## Public API documentation strategy

The public Sigurd documentation treats re-exported signal primitives as first-party Sigurd APIs.

That means:

- docs should present them as part of the `sigurd` package surface
- examples should import from `sigurd`, not from `@leonardoraele/signals`
- the implementation dependency should remain an internal detail from the reader's perspective

To support that, TypeDoc uses a local documentation entry point that re-exports the intended public surface under the Sigurd package name.

## Build workflow

Local and CI docs builds follow the same sequence:

1. generate API markdown with TypeDoc
2. build the VitePress site
3. publish or validate the resulting static output

Every step leaves the repository in a stable state and makes the published reference reproducible from source.

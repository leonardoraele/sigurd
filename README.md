# Sigurd

[![Static Badge](https://img.shields.io/badge/github-gray?logo=github)
](https://github.com/leonardoraele/sigurd)
[![NPM Version](https://img.shields.io/npm/v/sigurd)
](https://www.npmjs.com/package/sigurd)
[![GitHub License](https://img.shields.io/github/license/leonardoraele/sigurd)](./LICENSE.txt)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/sigurd)](https://bundlephobia.com/package/sigurd)

A lightweight state management library for React based on signals.

> Contributions welcome!

## Installation

```bash
npm install sigurd
```

## Usage

Your stores are simple JavaScript classes whose properties are signals:

You can distribute your store using React's context API or use a global singleton instance. You can even nest a store within another store!

To build a hook for your store, simply pass the store instance through the `useSignalStore()` hook.

```js
// store.js
import { useSignalStore } from 'sigurd';

export class CounterStore {
	public count = new SignalState(0);
}

export const GlobalCounterStore = new CounterStore();

export function useCounterStore() {
	return useSignalStore(GlobalCounterStore);
}
```

The object returned by the `useCounterStore()` hook is a disposable object which keeps track of signal dependencies during its lifecycle. It also points to the actual store instance as its prototype, so you can access the store's properties and methods directly. <!-- Think of it as a proxy, but without the runtime costs of an actual Proxy object. -->

This means that, in your components, you *must* assign the store to a `using` variable within your component to ensure signals are tracked correctly.

```jsx
import { useCounterStore } from './store.js';

export function CounterComponent() {
	// Important: The store must be assigned to a `using` variable instead of `let` or `const`.
	using store = useCounterStore();

	return (
		<div>
			<p>Count: {store.count.value}</p>
			<button onClick={() => store.count.value++}>Increment</button>
		</div>
	);
}
```

And that's it! Sigurd will detect any signal used inside the component's body and track it. Then, whenever any of those signals change, the component will be automatically re-rendered.

## Documentation Architecture

Sigurd's long-term documentation model is:

- **VitePress** for the documentation site
- **TypeDoc** for generated API reference
- **GitHub Pages** for hosting
- **Static examples only**, with no live playground requirement
- **Hand-written guides** for concepts, tutorials, and recipes
- **Generated API docs** for the public exported surface

### Goals and audience

The documentation site should help:

- **New users** understand what Sigurd is, when to use it, and how to get started quickly
- **Application developers** learn the recommended patterns for stores, hooks, and component usage
- **Existing users** find authoritative API reference for the current public surface
- **Contributors** understand the intended separation between conceptual docs and generated API docs

### Top-level content categories

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

### Hand-written vs generated documentation

- **Hand-written docs** should explain concepts, workflows, design intent, and best practices.
- **Generated API docs** should cover the public exported API from the `sigurd` package.
- Guides should link to API reference entries when readers need exact signatures or type details.
- API reference should not try to replace guides; it should complement them.

### Re-exported APIs are documented as Sigurd APIs

Sigurd currently re-exports symbols from `@leonardoraele/signals` through its public entrypoint.

For documentation purposes, any symbol exported from `sigurd` must be presented as part of **Sigurd's first-party public API**, even when its implementation originates in `@leonardoraele/signals`.

This means:

- generated docs should be anchored to the `sigurd` package entrypoint
- re-exported symbols should appear alongside native Sigurd exports in the API reference
- guides should refer readers to the Sigurd API reference, not to `@leonardoraele/signals`, unless external implementation details are specifically relevant for contributors
- `@leonardoraele/signals` should be treated as an implementation detail in user-facing documentation

### README vs documentation site

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

## API Reference Status

Until the documentation site is added, refer to the exported types and tests in this repository for the current API shape.

## License

This project is licensed under the MIT License.
See the [LICENSE.txt](./LICENSE.txt) file for the license's full text.

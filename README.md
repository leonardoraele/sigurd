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

## API Reference

TBD (for now, refer to the `*.d.ts` and `*.test.ts` files)

## License

This project is licensed under the MIT License.
See the [LICENSE.txt](./LICENSE.txt) file for the license's full text.

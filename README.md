# Sigurd

[![Static Badge](https://img.shields.io/badge/github-gray?logo=github)](https://github.com/leonardoraele/sigurd)
[![NPM Version](https://img.shields.io/npm/v/sigurd)](https://www.npmjs.com/package/sigurd)
[![GitHub License](https://img.shields.io/github/license/leonardoraele/sigurd)](./LICENSE.txt)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/sigurd)](https://bundlephobia.com/package/sigurd)

A lightweight state management library for React based on signals.

## Documentation

The full documentation site is published at:

- <https://leonardoraele.github.io/sigurd/>

It includes:

- getting started guides
- usage patterns and caveats
- static examples
- generated API reference for the full `sigurd` public surface

## Installation

```bash
npm install sigurd
```

## Quick example

```ts
// store.ts
import { SignalState, useSignalStore } from 'sigurd';

export class CounterStore {
  public count = new SignalState(0);
}

const counterStore = new CounterStore();

export function useCounterStore() {
  return useSignalStore(counterStore);
}
```

```tsx
// Counter.tsx
import { useCounterStore } from './store.js';

export function Counter() {
  using store = useCounterStore();

  return (
    <div>
      <p>Count: {store.count.value}</p>
      <button onClick={() => store.count.value++}>Increment</button>
    </div>
  );
}
```

## Notes

- The value returned by `useSignalStore()` must be assigned to a `using` variable inside the component body.
- Signal primitives are part of Sigurd's public API surface, so consumer code can import everything from `sigurd`.

## Development

Useful commands:

- `npm test`
- `npm run build`
- `npm run docs:build`
- `npm run docs:dev`

## License

This project is licensed under the MIT License. See [LICENSE.txt](./LICENSE.txt).

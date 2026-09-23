# Quickstart

This is the smallest useful Sigurd setup: a store backed by a signal and a component that reads it during render.

## 1. Define a store

```ts
import { SignalState, useSignalStore } from 'sigurd';

export class CounterStore {
  public count = new SignalState(0);
}

export const globalCounterStore = new CounterStore();

export function useCounterStore() {
  return useSignalStore(globalCounterStore);
}
```

## 2. Use the store in a component

```tsx
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

## 3. Understand what just happened

- `SignalState` holds mutable reactive state.
- `useSignalStore()` wraps the store for the current render.
- Reading `store.count.value` during render registers a dependency.
- When `count` changes, Sigurd rerenders the component automatically.
- The `using` binding disposes the render-tracking token correctly.

## Before moving on

Make sure the `using` line feels intentional rather than decorative. It is a real part of the API contract, not an implementation detail. The [core concepts](/getting-started/core-concepts) page explains why.

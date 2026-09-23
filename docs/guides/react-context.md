# React context

React context is the preferred pattern when a subtree needs its own store instance.

```tsx
import { createContext, useContext, type ReactNode } from 'react';
import { SignalState, useSignalStore } from 'sigurd';

class CounterStore {
  public count = new SignalState(0);
}

const CounterStoreContext = createContext<CounterStore | null>(null);

export function CounterStoreProvider({ children }: { children: ReactNode }) {
  return (
    <CounterStoreContext.Provider value={new CounterStore()}>
      {children}
    </CounterStoreContext.Provider>
  );
}

export function useCounterStore() {
  return useSignalStore(useContext(CounterStoreContext));
}
```

## Benefits

- supports multiple independent store instances
- keeps ownership local to a subtree
- makes testing and composition easier

## Important detail

`useSignalStore()` can safely accept `null` or `undefined`, so you can layer your own context validation strategy on top.

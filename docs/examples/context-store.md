# Context-backed store example

```tsx
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { SignalState, useSignalStore } from 'sigurd';

class CounterStore {
  public count = new SignalState(0);
}

const CounterStoreContext = createContext<CounterStore | null>(null);

export function CounterStoreProvider({ children }: { children: ReactNode }) {
  const store = useMemo(() => new CounterStore(), []);

  return (
    <CounterStoreContext.Provider value={store}>
      {children}
    </CounterStoreContext.Provider>
  );
}

export function useCounterStore() {
  return useSignalStore(useContext(CounterStoreContext));
}
```

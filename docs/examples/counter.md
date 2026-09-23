# Counter example

```ts
// store.ts
import { SignalState, useSignalStore } from 'sigurd';

class CounterStore {
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

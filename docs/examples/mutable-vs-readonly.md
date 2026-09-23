# Mutable vs readonly store wrappers

## Readonly wrapper

```ts
import { SignalState, useSignalStore } from 'sigurd';

class CounterStore {
  public count = new SignalState(0);
}

const counterStore = new CounterStore();

export function useCounterStore() {
  return useSignalStore(counterStore);
}
```

Use this when state updates happen through signals.

## Mutable wrapper

```ts
import { SignalState, useMutableSignalStore } from 'sigurd';

class DraftStore {
  public count = new SignalState(0);
  public label = 'draft';
}

const draftStore = new DraftStore();

export function useDraftStore() {
  return useMutableSignalStore(draftStore);
}
```

Use this when the store intentionally exposes writable non-signal properties that must update the original instance.

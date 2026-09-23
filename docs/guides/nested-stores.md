# Nested stores

Sigurd stores can contain other stores. This lets you model features compositionally instead of flattening everything into one object.

```ts
import { SignalState } from 'sigurd';

class PaginationStore {
  public page = new SignalState(1);
}

class SearchStore {
  public query = new SignalState('');
  public pagination = new PaginationStore();
}
```

## Why nesting works well

Because components subscribe by reading signals during render, it does not matter whether the signal lives on the top-level store or on a nested child store. If the component reads it, Sigurd tracks it.

## Recommended use

Nest stores when a child object has its own state and domain behavior. Avoid nesting merely to mirror UI structure unless the domain model also benefits from it.

# Global singletons

For small applications or isolated features, a single shared store instance is often enough.

```ts
import { SignalState, useSignalStore } from 'sigurd';

class SessionStore {
  public authenticated = new SignalState(false);
}

const globalSessionStore = new SessionStore();

export function useSessionStore() {
  return useSignalStore(globalSessionStore);
}
```

## When to use this pattern

Use a global singleton when:

- the store is application-wide
- you only need one instance
- tests and composition do not require multiple store trees

## When to move on

Switch to context-based distribution when you need per-subtree instances or dependency injection.

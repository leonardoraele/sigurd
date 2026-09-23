# Creating a store

A Sigurd store is usually just a class whose reactive members are signal instances.

```ts
import { SignalState } from 'sigurd';

export class TodoStore {
  public filter = new SignalState<'all' | 'open' | 'done'>('all');
  public items = new SignalState<string[]>([]);
}
```

## Recommended shape

Prefer these conventions:

- keep mutable application state inside signals
- expose methods on the store for domain actions
- avoid writable plain properties unless you truly need them

## Why this shape works well

`useSignalStore()` exposes a readonly wrapper. That pairs naturally with stores where state mutation happens by updating signal values, not by replacing plain object fields.

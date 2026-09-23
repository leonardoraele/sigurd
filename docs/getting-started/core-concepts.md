# Core concepts

## Stores are plain objects with signal fields

Sigurd does not force a specialized store base class. A store can be a class instance or a plain object as long as its reactive state lives inside signals.

## Components subscribe by reading during render

Sigurd tracks signal reads during the render phase. When a component reads `store.count.value`, that signal becomes part of the component's dependency set for the current render.

## `using` is part of the lifecycle model

The object returned by `useSignalStore()`, `useMutableSignalStore()`, and `useSignalObserverToken()` is disposable.

That is why components must bind those values with `using`:

```tsx
using store = useCounterStore();
```

Disposal closes the observation scope and prevents stale subscriptions from surviving past the current lifecycle.

## Two store wrappers exist for different write semantics

- `useSignalStore()` returns a readonly wrapper over the original store.
- `useMutableSignalStore()` returns a proxy that preserves writes to mutable plain properties.

Most applications should start with `useSignalStore()` and keep mutable state inside signals.

## Effects can depend on signals directly

`useSignalEffect()` is the signal-aware counterpart to React's `useEffect`. It tracks the signals used during the callback and reruns when they change, while still supporting an explicit dependency array when needed.

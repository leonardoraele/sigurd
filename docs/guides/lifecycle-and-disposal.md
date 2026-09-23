# Lifecycle and disposal

Sigurd's render tracking relies on disposable resources.

## Why disposal matters

During render, Sigurd opens an observation scope and records the signals that are read. That scope must be closed after the render lifecycle so stale observers do not survive and react to future changes.

## The `using` rule

Always bind the return value of these APIs with `using` in the component body:

- `useSignalStore()`
- `useMutableSignalStore()`
- `useSignalObserverToken()`

## Unmount behavior

When the component unmounts, Sigurd aborts any outstanding observation listeners created for that render and disposes the effect or token state that belongs to the component.

## Practical guidance

If a component only needs a store, prefer the higher-level store hooks over calling `useSignalObserverToken()` directly.

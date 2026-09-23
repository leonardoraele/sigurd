# Store hooks

Sigurd provides two wrappers for store consumption.

## `useSignalStore()`

Use this as the default choice.

- returns a readonly wrapper
- keeps the original store as the prototype
- encourages state mutation through signals instead of plain fields

## `useMutableSignalStore()`

Use this when the store intentionally exposes writable plain properties and writes must hit the original object.

- returns a proxy
- preserves mutation behavior for non-signal properties
- has more semantic overhead than the readonly wrapper

## Choosing between them

Start with `useSignalStore()` unless you can point to a concrete need for mutable plain properties on the store itself.

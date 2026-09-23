# Function: useSignalEffect()

> **useSignalEffect**(`callbackfn`, `deps?`): `void`

Defined in: src/hooks.ts:21

React-friendly wrapper around [SignalEffect](../../classes/SignalEffect/index.md).

This hook mirrors React's `useEffect`, but automatically tracks every Sigurd signal read while the callback runs.
When any of those signals changes, the effect is scheduled to rerun in a microtask.

## Parameters

### callbackfn

() => `void`

Effect callback that can read signals and perform side effects.

### deps?

`unknown`[] = `[]`

Optional React-style dependency list that recreates the effect when its values change.

## Returns

`void`

## Remarks

- The effect is created lazily and first evaluated after the component commits.
- Signal dependencies are discovered dynamically from values read inside `callbackfn`.
- Explicit `deps` are still honored, so you can mix React dependencies and signal dependencies when needed.
- The underlying [SignalEffect](../../classes/SignalEffect/index.md) is disposed automatically when the component unmounts.

# Function: useSignalObserverToken()

> **useSignalObserverToken**(): `Disposable`

Defined in: src/hooks.ts:135

Starts a render-scoped signal observation session for the current component.

Any signal read after this hook runs becomes associated with the returned token. When one of those signals changes,
the component rerenders once and the token aborts the current observation session.

## Returns

`Disposable`

Disposable token that cleans up the observation scope when disposed.

## Remarks

The token is a disposable resource. Components **must** assign it to a `using` variable in the component body so the
observation scope is always cleaned up, even when the component unmounts before a tracked signal changes.

Store hooks normally wrap this primitive through [useSignalStore](../useSignalStore/index.md) or [useMutableSignalStore](../useMutableSignalStore/index.md). Reach for it
directly only when you need render tracking without wrapping another object.

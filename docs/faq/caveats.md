# Caveats and common mistakes

## `using` is mandatory

If you skip the `using` binding, you skip disposal. That can leave render-tracking state alive longer than intended and break the assumptions the hooks rely on.

## Prefer signal fields over writable plain properties

`useSignalStore()` is optimized for stores whose mutable state lives inside signals. If you need writable plain properties, switch deliberately to `useMutableSignalStore()`.

## Signal reads only matter when they happen during render or effect evaluation

A component rerenders because it read a signal while Sigurd was observing that render. If the read happens outside of an observed render or effect callback, it does not create a subscription for the component.

## `useSignalEffect()` complements React dependencies rather than replacing them entirely

When your effect depends on props or other non-signal values, keep using the explicit dependency array for those values.

## Treat `sigurd` as the package boundary

The signal primitives documented here are intentionally presented as part of Sigurd's API surface. Consumer code should import from `sigurd`, not from the implementation dependency.

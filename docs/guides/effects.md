# Signal effects

Use `useSignalEffect()` when you want effect logic that reacts to signals without manually wiring every signal dependency into a React array.

```tsx
import { useSignalEffect, SignalState } from 'sigurd';

const temperature = new SignalState(20);

export function TemperatureLogger() {
  useSignalEffect(() => {
    console.log('Temperature changed to', temperature.value);
  });

  return null;
}
```

## How it behaves

- the effect is first evaluated after commit
- any signal read inside the callback becomes a dependency
- when one of those signals changes, the effect reruns in a microtask
- the effect is disposed automatically on unmount

## Mixing React dependencies

You can still pass a dependency array when the effect also depends on non-signal values from props or closures.

# Installation

Install Sigurd from npm:

```bash
npm install sigurd
```

Sigurd expects React in the consuming application. The package keeps React as a peer dependency so applications control the exact React version in use.

## What you get from the package

Import everything from `sigurd`:

```ts
import { SignalState, useSignalStore } from 'sigurd';
```

The signal primitives and the React hooks are all part of the same public package surface.

## Recommended next steps

1. Read the [quickstart](/getting-started/quickstart)
2. Read the [core concepts](/getting-started/core-concepts)
3. Keep the [caveats page](/faq/caveats) handy while you learn the `using` pattern

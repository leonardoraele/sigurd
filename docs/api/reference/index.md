# Sigurd API Reference

Public API reference entry point for Sigurd.

This file exists only for documentation generation. It collects the symbols that are part of Sigurd's public API so
the generated reference can treat them as first-party exports of the `sigurd` package, including the signal
primitives re-exported from the internal implementation dependency.

## Namespaces

- [SignalController](modules/SignalController/index.md)

## Classes

- [ReactiveArray](classes/ReactiveArray/index.md)
- [ReactiveMap](classes/ReactiveMap/index.md)
- [ReactiveSet](classes/ReactiveSet/index.md)
- [SignalComputed](classes/SignalComputed/index.md)
- [SignalEffect](classes/SignalEffect/index.md)
- [SignalState](classes/SignalState/index.md)

## Interfaces

- [EffectOptions](interfaces/EffectOptions/index.md)
- [EqualityComparer](interfaces/EqualityComparer/index.md)
- [ObserverCallback](interfaces/ObserverCallback/index.md)
- [SignalPrimitive](interfaces/SignalPrimitive/index.md)
- [StateOptions](interfaces/StateOptions/index.md)

## Functions

- [isReactiveProxy](functions/isReactiveProxy/index.md)
- [makeReactive](functions/makeReactive/index.md)
- [unmakeReactive](functions/unmakeReactive/index.md)
- [unwrapReactiveProxy](functions/unwrapReactiveProxy/index.md)
- [useMutableSignalStore](functions/useMutableSignalStore/index.md)
- [useSignalEffect](functions/useSignalEffect/index.md)
- [useSignalObserverToken](functions/useSignalObserverToken/index.md)
- [useSignalStore](functions/useSignalStore/index.md)

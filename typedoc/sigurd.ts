/**
 * Public API reference entry point for Sigurd.
 *
 * This file exists only for documentation generation. It collects the symbols that are part of Sigurd's public API so
 * the generated reference can treat them as first-party exports of the `sigurd` package, including the signal
 * primitives re-exported from the internal implementation dependency.
 *
 * @module sigurd
 */
export {
  useMutableSignalStore,
  useSignalEffect,
  useSignalObserverToken,
  useSignalStore,
} from '../src/hooks.js';

export {
  ReactiveArray,
  ReactiveMap,
  ReactiveSet,
  SignalComputed,
  SignalController,
  SignalEffect,
  SignalState,
  isReactiveProxy,
  makeReactive,
  unmakeReactive,
  unwrapReactiveProxy,
  type EffectOptions,
  type EqualityComparer,
  type ObserverCallback,
  type SignalPrimitive,
  type StateOptions,
} from '@leonardoraele/signals';

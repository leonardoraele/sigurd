export * from './hooks.js';

/**
 * `sigurd` computed signal that derives a value from other signals and recalculates it on demand.
 */
export { SignalComputed } from '@leonardoraele/signals';

/**
 * Configuration options for a `sigurd` {@link SignalEffect}.
 */
export type { EffectOptions } from '@leonardoraele/signals';

/**
 * `sigurd` effect type for reacting to signal changes outside of React render.
 */
export { SignalEffect } from '@leonardoraele/signals';

/**
 * Creates a reactive proxy that lets `sigurd` observe property writes on an object.
 */
export { makeReactive } from '@leonardoraele/signals';

/**
 * Returns whether an object is a reactive proxy created by `sigurd`.
 */
export { isReactiveProxy } from '@leonardoraele/signals';

/**
 * Unwraps a `sigurd` reactive proxy back to its original object.
 */
export { unwrapReactiveProxy } from '@leonardoraele/signals';

/**
 * Recursively removes `sigurd` reactive proxies from an object graph.
 */
export { unmakeReactive } from '@leonardoraele/signals';

/**
 * `sigurd` array type whose mutations participate in signal-based reactivity.
 */
export { ReactiveArray } from '@leonardoraele/signals';

/**
 * Mutable `sigurd` signal that stores a single value and notifies observers when it changes.
 */
export { SignalState } from '@leonardoraele/signals';

/**
 * Options for configuring a `sigurd` {@link SignalState}.
 */
export type { StateOptions } from '@leonardoraele/signals';

/**
 * Equality function used by `sigurd` state containers to detect meaningful changes.
 */
export type { EqualityComparer } from '@leonardoraele/signals';

/**
 * `sigurd` map implementation that emits change notifications for reactive consumers.
 */
export { ReactiveMap } from '@leonardoraele/signals';

/**
 * `sigurd` set implementation that emits change notifications for reactive consumers.
 */
export { ReactiveSet } from '@leonardoraele/signals';

/**
 * Observer callback invoked by `sigurd` when a signal primitive is read.
 */
export type { ObserverCallback } from '@leonardoraele/signals';

/**
 * Low-level `sigurd` controller for observation scopes and dependency tracking.
 */
export { SignalController } from '@leonardoraele/signals';

/**
 * Minimal `sigurd` interface implemented by values that can notify observers about changes.
 */
export type { SignalPrimitive } from '@leonardoraele/signals';

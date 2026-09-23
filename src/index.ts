/**
 * Sigurd couples React-facing store hooks with first-party signal primitives.
 *
 * The package intentionally re-exports the underlying signal types and helpers so consumers can build applications
 * entirely from the `sigurd` package surface without depending on implementation details.
 *
 * @packageDocumentation
 */
export * from './hooks.js';
export * from '@leonardoraele/signals';

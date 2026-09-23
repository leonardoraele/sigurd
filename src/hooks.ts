import './map-get-or-insert.js';
import { useEffect, useMemo, useState } from 'react';
import { SignalEffect, SignalController, type SignalPrimitive } from '@leonardoraele/signals';

/**
 * React-friendly wrapper around {@link SignalEffect}.
 *
 * This hook mirrors React's `useEffect`, but automatically tracks every Sigurd signal read while the callback runs.
 * When any of those signals changes, the effect is scheduled to rerun in a microtask.
 *
 * @remarks
 *
 * - The effect is created lazily and first evaluated after the component commits.
 * - Signal dependencies are discovered dynamically from values read inside `callbackfn`.
 * - Explicit `deps` are still honored, so you can mix React dependencies and signal dependencies when needed.
 * - The underlying {@link SignalEffect} is disposed automatically when the component unmounts.
 *
 * @param callbackfn - Effect callback that can read signals and perform side effects.
 * @param deps - Optional React-style dependency list that recreates the effect when its values change.
 */
export function useSignalEffect(callbackfn: () => void, deps: unknown[] = []): void {
  const effect = useMemo(() => new SignalEffect(callbackfn, { lazy: true }), deps);

  useEffect(() => {
    effect.events.addEventListener('dirty', () => queueMicrotask(() => effect.reevaluate()));
    return () => effect.dispose();
  }, [effect]);

  useEffect(() => void effect.reevaluate(), [effect]);
}

/**
 * Wraps a store so reads during render subscribe the component to every signal it touches.
 *
 * The returned object behaves like the original store, but includes a disposable token that tears down the render-time
 * observation scope. In components, the wrapper **must** be assigned to a `using` variable so disposal happens at the
 * end of the render lifecycle.
 *
 * @remarks
 *
 * This helper is intended for store hooks such as `useCounterStore()`. By returning a wrapper instead of the token
 * directly, the hook can stay ergonomic while still enforcing correct signal tracking.
 *
 * The wrapper uses the original store as its prototype, so writes land on the wrapper object rather than the original
 * store. For that reason the API exposes the wrapped store as `Readonly<T>`; mutable state should live inside signal
 * objects instead of plain writable properties.
 *
 * @param store - Store object whose signal reads should be tracked for the current component render.
 * @returns A disposable readonly wrapper over `store`, or the original nullish value.
 */
export function useSignalStore<T extends object>(store: T): Readonly<T> & Disposable;
export function useSignalStore<T extends object>(store: T | null): Readonly<T> & Disposable | null;
export function useSignalStore<T extends object>(store: T | undefined): Readonly<T> & Disposable | undefined;
export function useSignalStore<T extends object>(store: T | null | undefined): Readonly<T> & Disposable | null | undefined;
export function useSignalStore<T extends object>(store: T | null | undefined): Readonly<T> & Disposable | null | undefined {
  const token = useSignalObserverToken();

  if (!store) {
    token[Symbol.dispose]();
    return store;
  }

  return Object.create(store, {
    [Symbol.dispose]: {
      configurable: true,
      enumerable: false,
      value() {
        token[Symbol.dispose]();
        super[Symbol.dispose]?.();
      },
      writable: true,
    },
  });
}

/**
 * Mutable counterpart to {@link useSignalStore}.
 *
 * Use this variant when your store intentionally exposes writable plain properties in addition to signals and you need
 * writes to target the original store object. The returned proxy still carries a disposable token and therefore also
 * **must** be assigned to a `using` variable inside the component body.
 *
 * @remarks
 *
 * Prefer {@link useSignalStore} unless you specifically need mutation of non-signal properties. The readonly variant is
 * simpler and avoids the semantic overhead of a proxy.
 *
 * @param store - Store object whose signal reads should be tracked for the current component render.
 * @returns A disposable proxy for `store`, or the original nullish value.
 */
export function useMutableSignalStore<T extends object>(store: T): T & Disposable;
export function useMutableSignalStore<T extends object>(store: T | null): T & Disposable | null;
export function useMutableSignalStore<T extends object>(store: T | undefined): T & Disposable | undefined;
export function useMutableSignalStore<T extends object>(store: T | null | undefined): T & Disposable | null | undefined;
export function useMutableSignalStore<T extends object>(store: T | null | undefined): T & Disposable | null | undefined {
  const token = useSignalObserverToken();

  if (!store) {
    token[Symbol.dispose]();
    return store;
  }

  function dispose(this: T, ...args: any[]) {
    token[Symbol.dispose]();
    (store as any)[Symbol.dispose]?.apply(this, args);
  }

  return new Proxy<T>(store, {
    get(target, p, receiver) {
      if (p === Symbol.dispose) {
        return dispose;
      }

      return Reflect.get(target, p, receiver);
    },
  }) as T & Disposable;
}

/**
 * Starts a render-scoped signal observation session for the current component.
 *
 * Any signal read after this hook runs becomes associated with the returned token. When one of those signals changes,
 * the component rerenders once and the token aborts the current observation session.
 *
 * @remarks
 *
 * The token is a disposable resource. Components **must** assign it to a `using` variable in the component body so the
 * observation scope is always cleaned up, even when the component unmounts before a tracked signal changes.
 *
 * Store hooks normally wrap this primitive through {@link useSignalStore} or {@link useMutableSignalStore}. Reach for it
 * directly only when you need render tracking without wrapping another object.
 *
 * @returns Disposable token that cleans up the observation scope when disposed.
 */
export function useSignalObserverToken(): Disposable {
  function useManualRerender() {
    const [, setState] = useState(false);
    return () => setState((state: boolean) => !state);
  }

  const rerender = useManualRerender();
  const aborter = new AbortController();

  useEffect(() => {
    return () => {
      if (!aborter.signal.aborted) {
        aborter.abort();
      }
    };
  });

  function onSignalUsed(primitive: SignalPrimitive) {
    primitive.addEventListener('change', () => {
      rerender();
      aborter.abort();
    }, { signal: aborter.signal });
  }

  SignalController.pushScope();
  SignalController.observe(onSignalUsed);

  function onDispose() {
    SignalController.unobserve(onSignalUsed);
    SignalController.popScope();
  }

  return new DisposableToken(onDispose);
}

class DisposableToken {
  public constructor(
    private readonly callback: () => void,
  ) {}

  public [Symbol.dispose](): void {
    this.callback();
  }
}

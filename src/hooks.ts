import { useEffect, useMemo, useState } from 'react';
import { SignalEffect, SignalController, type SignalPrimitive } from
	'@leonardoraele/signals';

/**
 * Creates a `sigurd` effect whose lifecycle is bound to the current React component.
 *
 * @remarks
 *
 * `useSignalEffect()` is the `sigurd` counterpart to React's `useEffect()`. It runs after mount, automatically tracks
 * any signals read during the callback, and schedules a reevaluation in a microtask whenever one of those signals
 * changes. The underlying effect is disposed when the component unmounts.
 *
 * You can also provide explicit React-style dependencies. When one of them changes, `sigurd` creates a fresh
 * {@link SignalEffect} instance so the callback can track a new set of signals.
 *
 * @param callbackfn - Effect callback to run after mount and whenever a tracked signal or dependency invalidates it.
 * @param deps - Optional explicit dependencies, following the same rules as React's dependency array.
 */
export function useSignalEffect(callbackfn: () => void, deps: unknown[] = []): void {
	const effect = useMemo(() => new SignalEffect(callbackfn, { lazy: true }), deps);
	useEffect(() => {
		effect.events.addEventListener('dirty', () => queueMicrotask(() => effect.reevaluate()));
		return () => effect.dispose();
	}, [effect]);
	useEffect(() => void effect.reevaluate());
}

/**
 * Wraps a store so `sigurd` can observe any signals read during render and rerender the component when they change.
 *
 * @remarks
 *
 * `useSignalStore()` is intended for store hooks that should expose a read-only view of their state to React
 * components. The returned wrapper behaves like the original object, but it also owns the observer scope created by
 * {@link useSignalObserverToken}. Because the wrapper is disposable, it **MUST** be assigned to a `using` variable in
 * the component body.
 *
 * The wrapper is created with the original store as its prototype. Reads fall through to the original store, but
 * writes land on the wrapper itself, which is why the return type is `Readonly<T>`. Pass `null` or `undefined` through
 * unchanged when a store is unavailable; `sigurd` still creates and immediately disposes the observer token so React's
 * hook ordering remains valid.
 *
 * @param store - Store instance to observe for signal reads during render.
 * @returns A disposable read-only wrapper around the store, or the original `null`/`undefined` value.
 */
export function useSignalStore<T extends object>(store: T): Readonly<T> & Disposable;
export function useSignalStore<T extends object>(store: T | null): Readonly<T> & Disposable | null;
export function useSignalStore<T extends object>(store: T | undefined): Readonly<T> & Disposable | undefined;
export function useSignalStore<T extends object>(store: T | null | undefined):
	Readonly<T> & Disposable | null | undefined;
export function useSignalStore<T extends object>(store: T | null | undefined):
	Readonly<T> & Disposable | null | undefined
{
	// Must call this hook even if the store is null or undefined, because of react hook rules.
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
		}
	});
}

/**
 * Wraps a mutable store so `sigurd` can observe signals read during render without changing the store's write API.
 *
 * @remarks
 *
 * This hook has the same lifecycle behavior and `using` requirement as {@link useSignalStore}, but it returns a
 * `Proxy` that forwards writes to the original store instead of isolating them on a wrapper object. Use it when the
 * consuming component must both observe and mutate the same store instance during its lifetime.
 *
 * Passing `null` or `undefined` returns that value unchanged after the temporary observer token is disposed, allowing
 * callers to keep React hook ordering stable while handling optional stores.
 *
 * @param store - Store instance to observe for signal reads during render.
 * @returns A disposable mutable view of the store, or the original `null`/`undefined` value.
 */
export function useMutableSignalStore<T extends object>(store: T): T & Disposable;
export function useMutableSignalStore<T extends object>(store: T | null): T & Disposable | null;
export function useMutableSignalStore<T extends object>(store: T | undefined): T & Disposable | undefined;
export function useMutableSignalStore<T extends object>(store: T | null | undefined): T & Disposable | null | undefined;
export function useMutableSignalStore<T extends object>(store: T | null | undefined): T & Disposable | null | undefined
{
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
 * Creates a disposable `sigurd` observer token for the current render.
 *
 * @remarks
 *
 * `useSignalObserverToken()` tracks every signal read after it is called during the current render pass. When any of
 * those signals changes, `sigurd` rerenders the component and tears down the previous observation scope so the next
 * render can collect a fresh dependency set.
 *
 * The returned token **MUST** be assigned to a `using` variable in the component body. Disposing it on unmount is what
 * detaches the signal listeners and releases the observation scope safely.
 *
 * @returns A disposable token that owns the current render's signal observation scope.
 */
export function useSignalObserverToken(): DisposableToken {
	function useManualRerender() {
		const [, setState] = useState(false);
		return () => setState(s => !s);
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

/**
 * Disposable token used internally by `sigurd` hooks to release an observation scope.
 *
 * Instances are returned by {@link useSignalObserverToken} and are meant to be consumed through a `using` declaration
 * rather than instantiated directly.
 */
class DisposableToken {
	public constructor(
		private readonly callback: () => void,
	) {}

	/**
	 * Disposes the observer scope associated with this token.
	 */
	public [Symbol.dispose](): void {
		this.callback();
	}
}

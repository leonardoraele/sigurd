import 'global-jsdom/register';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { useMutableSignalStore, useSignalEffect, useSignalObserverToken, useSignalStore } from './hooks.js';
import type { ReactNode } from 'react';
import * as React from 'react';
import PACKAGE from '#package.js';
import { SignalState } from '@leonardoraele/signals';

describe(PACKAGE.name, () => {
	describe(useSignalEffect.name, () => {
		it('reruns the effect when the signal changes', async () => {
			const signal = new SignalState(0);
			let effectRunCount = 0;

			function TestComponent(): ReactNode {
				useSignalEffect(() => {
					signal.value; // Simulate dependency on runCount
					effectRunCount += 1;
				});
				return null;
			}

			render(<TestComponent />);

			expect(effectRunCount).toBe(1);

			signal.value++;

			expect(effectRunCount).toBe(1);

			await waitFor(() => expect(effectRunCount).toBe(2));

			signal.value++;

			expect(effectRunCount).toBe(2);

			await waitFor(() => expect(effectRunCount).toBe(3));
		});
	});

	describe(useSignalObserverToken.name, () => {
		it('triggers a rerender when a signal changes', async () => {
			const signal = new SignalState(0);
			let renderCount = 0;

			function TestComponent(): ReactNode {
				using _token = useSignalObserverToken();
				renderCount += 1;
				return <span data-testid="value">{signal.value}</span>;
			}

			const { getByTestId } = render(<TestComponent />);

			expect(getByTestId('value').textContent).toBe('0');
			expect(renderCount).toBe(1);

			signal.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('1'));
			expect(renderCount).toBe(2);

			signal.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('2'));
			expect(renderCount).toBe(3);
		});
	});

	describe(useSignalStore.name, () => {
		it('mounts a store with a disposable token', async () => {
			const store = {
				data: new SignalState(0),
			};
			let renderCount = 0;

			function TestComponent(): ReactNode {
				using storeWithToken = useSignalStore(store);
				renderCount += 1;
				return <span data-testid="value">{storeWithToken.data.value}</span>;
			}

			const { getByTestId } = render(<TestComponent />);

			expect(getByTestId('value').textContent).toBe('0');
			expect(renderCount).toBe(1);

			store.data.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('1'));
			expect(renderCount).toBe(2);

			store.data.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('2'));
			expect(renderCount).toBe(3);
		});
	});

	describe(useMutableSignalStore.name, () => {
		it('mounts a mutable store with a disposable token', async () => {
			const store = {
				data: new SignalState(0),
			};
			let renderCount = 0;

			function TestComponent(): ReactNode {
				using storeWithToken = useMutableSignalStore(store);
				renderCount += 1;
				return <span data-testid="value">{storeWithToken.data.value}</span>;
			}

			const { getByTestId } = render(<TestComponent />);

			expect(getByTestId('value').textContent).toBe('0');
			expect(renderCount).toBe(1);

			store.data.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('1'));
			expect(renderCount).toBe(2);

			store.data.value++;

			await waitFor(() => expect(getByTestId('value').textContent).toBe('2'));
			expect(renderCount).toBe(3);
		});
	});
});

import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { SignalState } from '@leonardoraele/signals';
import { withSigurd } from './hoc.js';
import * as React from 'react';

describe('withSigurd HOC', () => {
	it('rerenders the wrapped component when a signal it reads changes', async () => {
		const signal = new SignalState(0);
		let renderCount = 0;

		function TestComponent() {
			renderCount += 1;
			return <span data-testid="value">{signal.value}</span>;
		}

		const WrappedComponent = withSigurd(TestComponent);
		const { getByTestId } = render(<WrappedComponent />);

		expect(getByTestId('value').textContent).toBe('0');
		expect(renderCount).toBe(1);

		signal.value++;

		await waitFor(() => expect(getByTestId('value').textContent).toBe('1'));
		expect(renderCount).toBe(2);
	});
});

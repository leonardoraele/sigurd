import { useEffect, useState, type FunctionComponent } from "react";
import { SignalController, SignalPrimitive } from "@leonardoraele/signals";

function useManualRerender() {
	const [, setState] = useState(false);
	return () => setState(s => !s);
}

/**
 * Higher-order component that wraps a React component and makes it reactive to Sigurd signals.
 *
 * @example
 *
 * ```tsx
 * import { withSigurd, SignalState } from "sigurd";
 *
 * const count = new SignalState(0);
 *
 * function Counter() {
 *   return (
 *     <div>
 *       <p>{count.value}</p>
 *       <button onClick={() => count.value++}>Increment</button>
 *     </div>
 *   );
 * }
 *
 * export default withSigurd(Counter);
 * ```
 */
export function withSigurd<PropsType>(Component: FunctionComponent<PropsType>): FunctionComponent<PropsType> {
	function SigurdWrapper(props: PropsType) {
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
		try {
			return Component(props);
		} finally {
			SignalController.unobserve(onSignalUsed);
			SignalController.popScope();
		}
	}

	return Object.defineProperty(SigurdWrapper, 'name', { value: Component.name, configurable: true });
}

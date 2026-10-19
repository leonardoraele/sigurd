import { ReactiveArray, ReactiveMap, ReactiveSet, SignalComputed, SignalEffect, SignalState, isReactiveProxy } from
	'@leonardoraele/signals';
import { searchPropertiesDeep } from './property-iterator.js';
import { GlobalStoreRegistry } from './GlobalStoreRegistry';

export interface SignalSourceEntry {
	readonly path: string;
	readonly source: SignalState
		| SignalComputed
		| ReactiveMap<unknown, unknown>
		| ReactiveSet<unknown>
		| ReactiveArray<unknown>
		| object;
}

export interface SignalSinkEntry {
	readonly path: string;
	readonly sink: SignalComputed | SignalEffect;
}

export class StoreInfo {
	constructor(
		public readonly store: object,
		public readonly id: string,
		public readonly description: string,
	) {
		this.initSignals();
	}

	public readonly sources = new Set<SignalSourceEntry>();
	public readonly sinks = new Set<SignalSinkEntry>();

	private initSignals() {
		searchPropertiesDeep<typeof this.store>(
			this.store,
			({ path, value, enter, skip }) => {
				if (typeof value !== 'object' || value === null) {
					return;
				}
				const pathStr = path.join('.');
				if (value instanceof SignalState
					|| value instanceof ReactiveMap
					|| value instanceof ReactiveSet
					|| value instanceof ReactiveArray
				) {
					this.sources.add({ source: value, path: pathStr });
				} else if (value instanceof SignalEffect) {
					this.sinks.add({ sink: value, path: pathStr });
				} else if (value instanceof SignalComputed) {
					this.sources.add({ source: value, path: pathStr });
					this.sinks.add({ sink: value, path: pathStr });
				} else if (isReactiveProxy(value)) {
					this.sources.add({ source: value, path: pathStr });
				} else if (GlobalStoreRegistry.hasStore(value)) {
					skip();
				} else {
					enter();
				}
			},
			{
				inherited: true,
				nonEnumerables: true,
				symbols: true,
			},
		).toArray();
	}

	public refresh() {
		this.initSignals();
	}
}

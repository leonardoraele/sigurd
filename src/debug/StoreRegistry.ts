import { StoreInfo } from "./StoreInfo";

export class StoreRegistry {
	private static generateId(): string {
		return Math.random().toString(36).substr(2, 9);
	}

	private readonly _stores = new Map<object, StoreInfo>();

	public getStores(): StoreInfo[] {
		return Array.from(this._stores.values());
	}

	public register(store: object, description?: string) {
		// Defer the registration to avoid potential issues with synchronous execution. e.g. If this is called from a
		// class constructor of the store, we want to wait for the constructor to initialize all signals before
		// registration. Deferring registration is not an issue because it is mainly for debug purposes.
		setTimeout(() => {
			const id = StoreRegistry.generateId();
			description ||= store instanceof Object ? store.constructor.name : `<store-${id}>`;
			const info = new StoreInfo(store, id, description);
			this._stores.set(store, info);
		}, 0);
	}

	public unregister(store: object) {
		this._stores.delete(store);
	}

	public refresh() {
		const stores = Array.from(this._stores.keys());
		stores.forEach(store => this.unregister(store));
		this._stores.clear();
		stores.forEach(store => this.register(store));
	}

	public hasStore(value: object) {
		return this._stores.has(value);
	}
}

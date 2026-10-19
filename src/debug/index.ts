import { GlobalStoreRegistry } from './GlobalStoreRegistry';

export function registerStore(store: object, description?: string) {
	GlobalStoreRegistry.register(store, description);
}

export function unregisterStore(store: object) {
	GlobalStoreRegistry.unregister(store);
}

export { GlobalStoreRegistry };

// @ts-ignore
globalThis['sigurd'] = GlobalStoreRegistry;

if (typeof Map.prototype.getOrInsert !== 'function') {
	Object.defineProperty(Map.prototype, 'getOrInsert', {
		configurable: true,
		value(key, defaultValue) {
			if (!this.has(key)) {
				this.set(key, defaultValue);
			}
			return this.get(key);
		},
		writable: true,
	});
}

declare global {
  interface Map<K, V> {
    getOrInsert(key: K, defaultValue: V): V;
  }
}

if (!Map.prototype.getOrInsert) {
  Object.defineProperty(Map.prototype, 'getOrInsert', {
    configurable: true,
    value(this: Map<unknown, unknown>, key: unknown, defaultValue: unknown): unknown {
      if (!this.has(key)) {
        this.set(key, defaultValue);
      }

      return this.get(key);
    },
    writable: true,
  });
}

export {};

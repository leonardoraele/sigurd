import { describe, expect, it } from 'vitest';
import { getKeys, getPropDeep, searchPropertiesDeep } from './property-iterator.js';

describe(getKeys.name, () => {
	const symbol = Symbol('hidden');
	const prototype = Object.assign(Object.create(null), { inherited: true });
	const subject = Object.create(prototype);

	Object.defineProperty(subject, 'hidden', {
		value: 1,
		enumerable: false,
	});
	subject.visible = 2;
	subject[symbol] = 3;

	it('should return enumerable own string keys by default', () => {
		expect(Array.from(getKeys(subject))).toEqual(['visible']);
	});

	it('should include symbols, non-enumerables, and inherited keys when requested', () => {
		expect(Array.from(getKeys(subject, { symbols: true, nonEnumerables: true, inherited: true }))).toEqual(['visible', symbol, 'hidden', 'inherited']);
		expect(Array.from(getKeys(subject, { symbols: false, nonEnumerables: true, inherited: true }))).toEqual(['visible', 'hidden', 'inherited']);
		expect(Array.from(getKeys(subject, { symbols: true, nonEnumerables: false, inherited: true }))).toEqual(['visible', symbol, 'inherited']);
		expect(Array.from(getKeys(subject, { symbols: true, nonEnumerables: true, inherited: false }))).toEqual(['visible', symbol, 'hidden']);
		expect(Array.from(getKeys(subject, { symbols: true, nonEnumerables: false, inherited: false }))).toEqual(['visible', symbol]);
		expect(Array.from(getKeys(subject, { symbols: false, nonEnumerables: true, inherited: false }))).toEqual(['visible', 'hidden']);
		expect(Array.from(getKeys(subject, { symbols: false, nonEnumerables: false, inherited: true }))).toEqual(['visible', 'inherited']);
		expect(Array.from(getKeys(subject, { symbols: false, nonEnumerables: false, inherited: false }))).toEqual(['visible']);
	});
});

describe(searchPropertiesDeep.name, () => {
	it('should yield primitive properties in depth-first order by default', () => {
		const subject = {
			a: {
				b: {
					c: 1,
				},
				d: 2,
			},
			e: 3,
		};

		expect(Array.from(searchPropertiesDeep(subject))).toEqual([1, 2, 3]);
	});
});

describe(getPropDeep.name, () => {
	it('should return a nested property value by path', () => {
		const subject = {
			a: {
				b: {
					c: 42,
				},
			},
		};

		expect(getPropDeep<number>(subject, ['a', 'b', 'c'])).toBe(42);
	});

	it('should return undefined when an intermediate path segment is not an object', () => {
		const subject = {
			a: 1,
		};

		expect(getPropDeep(subject, ['a', 'b'])).toBeUndefined();
	});
});

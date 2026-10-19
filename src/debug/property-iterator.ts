export interface GetKeysOptions {
	nonEnumerables?: boolean;
	symbols?: boolean;
	inherited?: boolean;
}

/**
 * Retrieves the keys of an object based on the specified options.
 */
export function getKeys(subject: object, options?: GetKeysOptions): Set<PropertyKey> {
	let keys = new Set<PropertyKey>(Object.keys(subject));

	if (options?.symbols) {
		keys = keys.union(new Set(Object.getOwnPropertySymbols(subject)));
	}

	if (options?.nonEnumerables) {
		keys = keys.union(new Set(Object.getOwnPropertyNames(subject)));
	}

	if (options?.inherited) {
		const prototype = Object.getPrototypeOf(subject);
		if (typeof prototype === 'object' && prototype !== null) {
			keys = keys.union(getKeys(prototype, options));
		}
	}

	return keys;
}

export interface SearchPropertiesDeepIteratorFunction<RootType extends object, T = unknown> {
	(params: SearchPropertiesDeepIteratorParams<RootType, T>): void;
}

export interface SearchPropertiesDeepIteratorParams<RootType extends object = object, YieldType = unknown>
{
	root: RootType;
	path: PropertyKey[];
	object: object;
	key: PropertyKey;
	value: unknown;
	isObject: boolean;
	enter(options?: GetKeysOptions): void;
	skip(): void;
	back(): void;
	stop(): void;
	push(value: YieldType): void;
}

/**
 * Recursively searches for properties in an object and the objects it contains.
 *
 * @remarks
 *
 * For each property found, the iterator function is called with detailed information about the property, including its
 * path, value, and the object it belongs to. It expects you to call one of the control methods (`enter`, `skip`,
 * `back`, `stop`, `push`) to guide the search process.
 *
 * @param searchRoot The root object to start the search from.
 * @param iterator The function to be called for each property found.
 * @param options Options to control the behavior of the search.
 * @returns A generator that yields the values specified by the iterator function.
 */
// export function searchPropertiesDeep<RootType extends object>(searchRoot: RootType): Generator<unknown>;
// export function searchPropertiesDeep<RootType extends object>(
// 	searchRoot: RootType,
// 	options: GetKeysOptions,
// ): Generator<unknown>;
// export function searchPropertiesDeep<RootType extends object>(
// 	searchRoot: RootType,
// 	iterator: SearchPropertiesDeepIteratorFunction<RootType>,
// 	options: GetKeysOptions,
// ): Generator<unknown>;
// export function searchPropertiesDeep<RootType extends object, YieldType>(
// 	searchRoot: RootType,
// 	iterator: SearchPropertiesDeepIteratorFunction<RootType, YieldType>,
// 	options: GetKeysOptions,
// ): Generator<YieldType>;
export function *searchPropertiesDeep<RootType extends object>(
	searchRoot: RootType,
	iterator: SearchPropertiesDeepIteratorFunction<RootType, unknown> = ({ value, push, isObject, enter }) => {
		if (isObject) {
			enter();
		} else {
			push(value);
		}
	},
	options: GetKeysOptions = {},
): Generator<unknown> {
	// Variables to control the flow of the search and to store intermediate results.
	const visited = new Set<object>();
	let nextStep: 'enter' | 'skip' | 'back' | 'stop';
	let nextYields: unknown[] = [];
	let nextOptions: GetKeysOptions = options;
	let searchCanceled = false;

	function enter(opts: GetKeysOptions) {
		nextStep = 'enter';
		nextOptions = opts;
	}

	function skip() {
		nextStep = 'skip';
	}

	function back() {
		nextStep = 'back';
	}

	function stop() {
		nextStep = 'stop';
		searchCanceled = true;
	}

	function push(value: unknown) {
		nextYields.push(value);
	}

	function* _searchPropertiesDeep(
		object: object,
		objectPath: PropertyKey[],
		options: GetKeysOptions,
	): Generator<unknown> {
		// Infinite loop prevention
		if (visited.has(object)) {
			return;
		}
		visited.add(object);

		// Retrieve the keys of the current object based on the provided options.
		const keys = getKeys(object, options);

		for (const key of keys) {
			// Check if the search has been canceled before processing the current key.
			if (searchCanceled) {
				return;
			}

			const path: PropertyKey[] = [...objectPath, key];

			// Attempt to retrieve the value of the current key, handling any potential TypeError that may occur if the
			// property is inaccessible.
			let value: unknown;
			try {
				value = (object as Record<PropertyKey, unknown>)[key]!;
			} catch (e/*: TypeError*/) {
				continue;
			}

			nextStep = 'enter' as typeof nextStep;
			nextYields.length = 0;
			nextOptions = options;

			const isObject = typeof value === 'object' && value !== null;

			// Invoke the iterator function with the current property details and control functions.
			iterator({ root: searchRoot, path, object, key, value, isObject, enter, skip, back, stop, push });

			// Yield any values that were pushed during the iterator invocation.
			yield* nextYields;

			// Determine the next action based on the iterator's decision.
			if (isObject && nextStep === 'enter') {
				yield* _searchPropertiesDeep(value as object, path, nextOptions);
			} else if (nextStep === 'back' || nextStep === 'stop') {
				break;
			}
		}
	}

	yield* _searchPropertiesDeep(searchRoot, [], options);
}

/**
 * Retrieves the value of a property in an object based on the specified path. Returns `undefined` if the property does
 * not exist.
 */
export function getPropDeep<T = unknown>(subject: object, path: PropertyKey[]): T|undefined {
	for (let i = 0; i < path.length; i++) {
		const key = path[i]!;
		if (typeof subject !== 'object' || subject === null) {
			return undefined;
		}
		subject = (subject as Record<PropertyKey, unknown>)[key] as any;
	}
	return subject as T;
}

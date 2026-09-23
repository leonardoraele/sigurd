# Class: ReactiveMap\<K, V\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:2

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

### K

`K`

### V

`V`

## Implements

- `ReadonlyMap`\<`K`, `V`\>

## Constructors

### Constructor

> **new ReactiveMap**\<`K`, `V`\>(`entries?`): `ReactiveMap`\<`K`, `V`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:3

#### Parameters

##### entries?

`Iterable`\<readonly \[`K`, `V`\], `any`, `any`\>

#### Returns

`ReactiveMap`\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

## Properties

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

#### Inherited from

`Map.[species]`

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): `string`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:22

##### Returns

`string`

#### Overrides

`Map.[toStringTag]`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<\{ `change`: `void`; \}\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:5

##### Returns

`EventEmitter`\<\{ `change`: `void`; \}\>

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:9

##### Returns

`number`

the number of elements in the Map.

#### Implementation of

`ReadonlyMap.size`

#### Overrides

`Map.size`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:21

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Implementation of

`ReadonlyMap.[iterator]`

#### Overrides

`Map.[iterator]`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:10

Removes all elements from the Map.

#### Returns

`void`

#### Overrides

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:11

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Overrides

`Map.delete`

***

### entries()

> **entries**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:16

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Implementation of

`ReadonlyMap.entries`

#### Overrides

`Map.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:12

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

##### callbackfn

(`value`, `key`, `map`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Implementation of

`ReadonlyMap.forEach`

#### Overrides

`Map.forEach`

***

### get()

> **get**(`key`): `V` \| `undefined`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:13

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`K`

#### Returns

`V` \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Implementation of

`ReadonlyMap.get`

#### Overrides

`Map.get`

***

### getOrInsert()

> **getOrInsert**(`key`, `defaultValue`): `V`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:19

Returns a specified element from the Map object.
If no element is associated with the specified key, a new element with the value `defaultValue` will be inserted into the Map and returned.

#### Parameters

##### key

`K`

##### defaultValue

`V`

#### Returns

`V`

The element associated with the specified key, which will be `defaultValue` if no element previously existed.

#### Overrides

`Map.getOrInsert`

***

### getOrInsertComputed()

> **getOrInsertComputed**(`key`, `callback`): `V`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:20

Returns a specified element from the Map object.
If no element is associated with the specified key, the result of passing the specified key to the `callback` function will be inserted into the Map and returned.

#### Parameters

##### key

`K`

##### callback

(`key`) => `V`

#### Returns

`V`

The element associated with the specific key, which will be the newly computed value if no element previously existed.

#### Overrides

`Map.getOrInsertComputed`

***

### has()

> **has**(`key`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:14

#### Parameters

##### key

`K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Implementation of

`ReadonlyMap.has`

#### Overrides

`Map.has`

***

### keys()

> **keys**(): `MapIterator`\<`K`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:17

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Implementation of

`ReadonlyMap.keys`

#### Overrides

`Map.keys`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:15

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`K`

##### value

`V`

#### Returns

`this`

#### Overrides

`Map.set`

***

### values()

> **values**(): `MapIterator`\<`V`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveMap.d.ts:18

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Implementation of

`ReadonlyMap.values`

#### Overrides

`Map.values`

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Defined in: node\_modules/typescript/lib/lib.es2024.collection.d.ts:23

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

##### K

`K`

##### T

`T`

#### Parameters

##### items

`Iterable`\<`T`\>

An iterable.

##### keySelector

(`item`, `index`) => `K`

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

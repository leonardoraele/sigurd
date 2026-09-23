# Class: ReactiveSet\<T\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:2

## Extends

- `Set`\<`T`\>

## Type Parameters

### T

`T`

## Implements

- `ReadonlySet`\<`T`\>

## Constructors

### Constructor

> **new ReactiveSet**\<`T`\>(`values?`): `ReactiveSet`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:3

#### Parameters

##### values?

`Iterable`\<`T`, `any`, `any`\>

#### Returns

`ReactiveSet`\<`T`\>

#### Overrides

`Set<T>.constructor`

## Properties

### \[species\]

> `readonly` `static` **\[species\]**: `SetConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:320

#### Inherited from

`Set.[species]`

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): `string`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:25

##### Returns

`string`

#### Overrides

`Set.[toStringTag]`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<\{ `change`: `void`; \}\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:5

##### Returns

`EventEmitter`\<\{ `change`: `void`; \}\>

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:8

##### Returns

`number`

the number of (unique) elements in Set.

#### Implementation of

`ReadonlySet.size`

#### Overrides

`Set.size`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `SetIterator`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:24

#### Returns

`SetIterator`\<`T`\>

#### Implementation of

`ReadonlySet.[iterator]`

#### Overrides

`Set.[iterator]`

***

### add()

> **add**(`value`): `this`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:9

Appends a new element with a specified value to the end of the Set.

#### Parameters

##### value

`T`

#### Returns

`this`

#### Overrides

`Set.add`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:10

Removes all elements from the Set.

#### Returns

`void`

#### Overrides

`Set.clear`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:11

Removes a specified value from the Set.

#### Parameters

##### value

`T`

#### Returns

`boolean`

Returns true if an element in the Set existed and has been removed, or false if the element does not exist.

#### Overrides

`Set.delete`

***

### difference()

> **difference**\<`U`\>(`other`): `Set`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:19

#### Type Parameters

##### U

`U`

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T`\>

a new Set containing all the elements in this Set which are not also in the argument.

#### Implementation of

`ReadonlySet.difference`

#### Overrides

`Set.difference`

***

### entries()

> **entries**(): `SetIterator`\<\[`T`, `T`\]\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:14

Returns an iterable of [v,v] pairs for every value `v` in the set.

#### Returns

`SetIterator`\<\[`T`, `T`\]\>

#### Implementation of

`ReadonlySet.entries`

#### Overrides

`Set.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:12

Executes a provided function once per each value in the Set object, in insertion order.

#### Parameters

##### callbackfn

(`value`, `value2`, `set`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Implementation of

`ReadonlySet.forEach`

#### Overrides

`Set.forEach`

***

### has()

> **has**(`value`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:13

#### Parameters

##### value

`T`

#### Returns

`boolean`

a boolean indicating whether an element with the specified value exists in the Set or not.

#### Implementation of

`ReadonlySet.has`

#### Overrides

`Set.has`

***

### intersection()

> **intersection**\<`U`\>(`other`): `Set`\<`T` & `U`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:18

#### Type Parameters

##### U

`U`

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` & `U`\>

a new Set containing all the elements which are both in this Set and in the argument.

#### Implementation of

`ReadonlySet.intersection`

#### Overrides

`Set.intersection`

***

### isDisjointFrom()

> **isDisjointFrom**(`other`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:23

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether this Set has no elements in common with the argument.

#### Implementation of

`ReadonlySet.isDisjointFrom`

#### Overrides

`Set.isDisjointFrom`

***

### isSubsetOf()

> **isSubsetOf**(`other`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:21

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether all the elements in this Set are also in the argument.

#### Implementation of

`ReadonlySet.isSubsetOf`

#### Overrides

`Set.isSubsetOf`

***

### isSupersetOf()

> **isSupersetOf**(`other`): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:22

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether all the elements in the argument are also in this Set.

#### Implementation of

`ReadonlySet.isSupersetOf`

#### Overrides

`Set.isSupersetOf`

***

### keys()

> **keys**(): `SetIterator`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:15

Despite its name, returns an iterable of the values in the set.

#### Returns

`SetIterator`\<`T`\>

#### Implementation of

`ReadonlySet.keys`

#### Overrides

`Set.keys`

***

### symmetricDifference()

> **symmetricDifference**\<`U`\>(`other`): `Set`\<`T` \| `U`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:20

#### Type Parameters

##### U

`U`

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` \| `U`\>

a new Set containing all the elements which are in either this Set or in the argument, but not in both.

#### Implementation of

`ReadonlySet.symmetricDifference`

#### Overrides

`Set.symmetricDifference`

***

### union()

> **union**\<`U`\>(`other`): `Set`\<`T` \| `U`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:17

#### Type Parameters

##### U

`U`

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` \| `U`\>

a new Set containing all the elements in this Set and also all the elements in the argument.

#### Implementation of

`ReadonlySet.union`

#### Overrides

`Set.union`

***

### values()

> **values**(): `SetIterator`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/ReactiveSet.d.ts:16

Returns an iterable of values in the set.

#### Returns

`SetIterator`\<`T`\>

#### Implementation of

`ReadonlySet.values`

#### Overrides

`Set.values`

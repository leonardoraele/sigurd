# Class: SignalState\<T\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:7

Represents a mutable variable that holds a value and can be observed when the value is set.

It only emits `change` events if the value is set to a new value that is different from the current value in the box.
You can optionally provide a custom equality comparer function to determine whether two values are considered equal.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new SignalState**\<`T`\>(`initialValue`, `options?`): `SignalState`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:9

#### Parameters

##### initialValue

`T`

##### options?

[`StateOptions`](../../interfaces/StateOptions/index.md)\<`T`\>

#### Returns

`SignalState`\<`T`\>

## Properties

### events

> `readonly` **events**: `EventEmitter`\<\{ `change`: `void`; \}\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:12

## Accessors

### value

#### Get Signature

> **get** **value**(): `T`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:16

##### Returns

`T`

#### Set Signature

> **set** **value**(`newValue`): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:17

##### Parameters

###### newValue

`T`

##### Returns

`void`

## Methods

### observe()

> **observe**(`signal`): `AsyncGenerator`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalState.d.ts:18

#### Parameters

##### signal

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

`AsyncGenerator`\<`T`\>

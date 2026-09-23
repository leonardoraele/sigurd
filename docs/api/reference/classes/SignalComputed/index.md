# Class: SignalComputed\<T\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:1

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new SignalComputed**\<`T`\>(`callbackfn`): `SignalComputed`\<`T`\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:3

#### Parameters

##### callbackfn

() => `T`

#### Returns

`SignalComputed`\<`T`\>

## Properties

### events

> `readonly` **events**: `EventEmitter`\<\{ `change`: `void`; `clean`: `void`; `dirty`: `void`; \}\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:8

## Accessors

### dirty

#### Get Signature

> **get** **dirty**(): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:14

##### Returns

`boolean`

***

### value

#### Get Signature

> **get** **value**(): `T`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:13

##### Returns

`T`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:17

#### Returns

`void`

***

### forceRerun()

> **forceRerun**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalComputed.d.ts:15

#### Returns

`void`

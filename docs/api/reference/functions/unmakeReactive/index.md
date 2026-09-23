# Function: unmakeReactive()

> **unmakeReactive**\<`T`\>(`subject`): `T`

Defined in: node\_modules/@leonardoraele/signals/dist/makeReactive.d.ts:29

This function takes a reactive proxy and returns the original object that was made reactive. It also recursively
unwraps any nested reactive proxies within the object. This is useful if the reactive proxy was created with the
`deep` option set to `true`, and you want to get the original object without any reactive proxies.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### subject

`T`

## Returns

`T`

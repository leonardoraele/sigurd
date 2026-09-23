# Function: makeReactive()

> **makeReactive**\<`T`\>(`subject`, `__namedParameters?`): `T`

Defined in: node\_modules/@leonardoraele/signals/dist/makeReactive.d.ts:11

This function takes an object and returns a reactive proxy of that object. The reactive proxy will emit change events
whenever any property of the object is changed.

If the `deep` option is set to `true`, the function will also make all nested objects reactive.

If the `atomic` option is set to `true`, the function will treat the entire object as a single unit, and any change
to any property will emit a change event for the entire object. This means any effect that depends on one property of
the object will be re-run whenever that property or any other property of the object changes.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### subject

`T`

### \_\_namedParameters?

#### atomic?

`boolean`

#### deep?

`boolean`

## Returns

`T`

# Interface: SignalPrimitive

Defined in: node\_modules/@leonardoraele/signals/dist/SignalPrimitive.d.ts:2

## Extends

- `EventEmitter`\<\{ `change`: `void`; \}\>

## Methods

### addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`, `__namedParameters?`): `void`

Defined in: node\_modules/@leonardoraele/event-controller/dist/index.d.ts:33

Adds an event listener for the specified event type.

#### Type Parameters

##### K

`K` *extends* `"change"`

#### Parameters

##### type

`K`

##### listener

`EventListenerFunction`\<`Parameters`\<`object`\[`K`\]\>\>

##### \_\_namedParameters?

###### once?

`boolean`

###### signal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

`void`

#### Inherited from

`EventEmitter.addEventListener`

***

### next()

> **next**\<`K`\>(`type`, `__namedParameters?`): `Promise`\<`Parameters`\<`object`\[`K`\]\>\>

Defined in: node\_modules/@leonardoraele/event-controller/dist/index.d.ts:46

Creates a Promise that is resolved the next time the specified event type is emitted. The promise is rejected
if an abort signal is provided and it is triggered before the waited event type is emitted.

#### Type Parameters

##### K

`K` *extends* `"change"`

#### Parameters

##### type

`K`

##### \_\_namedParameters?

###### signal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

`Promise`\<`Parameters`\<`object`\[`K`\]\>\>

#### Inherited from

`EventEmitter.next`

***

### observe()

> **observe**\<`K`\>(`type`, `__namedParameters?`): `AsyncIterator`\<`Parameters`\<`object`\[`K`\]\>\>

Defined in: node\_modules/@leonardoraele/event-controller/dist/index.d.ts:41

#### Type Parameters

##### K

`K` *extends* `"change"`

#### Parameters

##### type

`K`

##### \_\_namedParameters?

###### signal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

`AsyncIterator`\<`Parameters`\<`object`\[`K`\]\>\>

#### Inherited from

`EventEmitter.observe`

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: node\_modules/@leonardoraele/event-controller/dist/index.d.ts:40

Removes an event listener for the specified event type.

#### Parameters

##### type

`PropertyKey`

##### listener

`EventListenerFunction`

#### Returns

`void`

#### Inherited from

`EventEmitter.removeEventListener`

# Class: SignalEffect

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:56

An SignalEffect is a reactive procedure that is executed if its dependencies change. It can be used to perform side
effects in response to changes in reactive state.

## Remarks

You have control over when the effect is executed. By default, the effect is not executed automatically when changes
are detected. You can check if the effect needs to be executed by checking the [SignalEffect.dirty](#dirty) property, and you
can run the effect by calling the [SignalEffect.reevaluate](#reevaluate) or [SignalEffect.forceRerun](#forcererun) methods.

To have the effect executed automatically whenever any of its dependencies change, you can create the effect by
calling the static [SignalEffect.createImmediate](#createimmediate) method instead of this class' constructor. In this case, you don't
need to call the [SignalEffect.reevaluate](#reevaluate) or [SignalEffect.forceRerun](#forcererun) methods manually.

Alternatively, you can also provide a [EffectOptions.scheduler](../../interfaces/EffectOptions/index.md#scheduler) object to determine when the effects need to be
executed. The scheduler is an asynchronous iterable or iterator that is used to determine when the effect should run.
Whenever the scheduler yields a value, the effect will be executed. The effect will be automatically disposed if the
effect ends, and the scheduler will be aborted if the effect is disposed earlier.

You must call [SignalEffect.dispose](#dispose-2) to clean up the effect when it is no longer needed, otherwise it will continue
to listen for changes in its dependencies indefinitely. You can also provide an [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal) when you create
the effect, and the effect will be automatically disposed when the signal is triggered.

## Constructors

### Constructor

> **new SignalEffect**(`callbackfn`, `__namedParameters?`): `SignalEffect`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:72

#### Parameters

##### callbackfn

() => `unknown`

##### \_\_namedParameters?

[`EffectOptions`](../../interfaces/EffectOptions/index.md)

#### Returns

`SignalEffect`

## Properties

### events

> `readonly` **events**: `EventEmitter`\<\{ `clean`: `void`; `dirty`: `void`; \}\>

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:76

## Accessors

### dirty

#### Get Signature

> **get** **dirty**(): `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:86

Indicates whether the effect is dirty, meaning that one or more of its dependencies have changed since the last
time it was executed. If this is true, calling [reevaluate](#reevaluate) will execute the effect.

If the effect is not dirty, it means that it has already been executed and is up to date with its dependencies.

##### Returns

`boolean`

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:103

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:104

#### Returns

`void`

***

### forceRerun()

> **forceRerun**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:101

Forces the effect to be executed immediately, regardless of whether it is dirty or not. The effect is executed
synchronously, and the effect is marked as clean after execution.

If the effect is already dirty, calling this method will have the same effect as calling [reevaluate](#reevaluate).

#### Returns

`void`

#### Throws

If the effect has been disposed, calling this method will throw an error.

***

### reevaluate()

> **reevaluate**(): `void`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:92

Reevaluates the effect if it is dirty. If the effect is dirty, the effect is executed synchronously and the
effect is marked as clean. If the effect is not dirty, nothing happens.

#### Returns

`void`

***

### createImmediate()

> `static` **createImmediate**(`callbackfn`, `options?`): `SignalEffect`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:71

Creates an SignalEffect that is executed immediately whenever any of its dependencies change.

#### Parameters

##### callbackfn

() => `unknown`

The callback function to be executed whenever the effect is run.

##### options?

`Omit`\<[`EffectOptions`](../../interfaces/EffectOptions/index.md), `"scheduler"`\>

Optional configuration for the effect.

#### Returns

`SignalEffect`

The created SignalEffect instance.

#### Remarks

The effect will be automatically disposed when the provided [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal) is triggered, if any. If you not
provide an [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal), you must call [SignalEffect.dispose](#dispose-2) manually to clean up the effect when it is
no longer needed, otherwise it will continue to listen for changes in its dependencies indefinitely.

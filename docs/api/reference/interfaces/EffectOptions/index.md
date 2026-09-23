# Interface: EffectOptions

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:1

## Properties

### lazy?

> `optional` **lazy?**: `boolean`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:18

By default, the effect is immediately, and synchronously, executed when it is created. If you set this option to
true, the effect will not be executed until you call the [SignalEffect.reevaluate](../../classes/SignalEffect/index.md#reevaluate) or [SignalEffect.forceRerun](../../classes/SignalEffect/index.md#forcererun)
methods manually. (or the scheduler determines it should, if you provided one)

#### Remarks

This is useful if you do not want the effect to be executed immediately when it is created, or if you want to
control when the effect is executed for the first time.

***

### scheduler?

> `optional` **scheduler?**: `AsyncIterable`\<`unknown`, `any`, `any`\> \| `AsyncIterator`\<`unknown`, `any`, `any`\> \| `null`

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:31

An asynchronous iterable or iterator that is used to determine when the effect should be executed. Whenever the
scheduler yields a value, the effect is executed.

#### Remarks

The effect is only executed if it is dirty, meaning that one or more of its dependencies have changed since the
last time it was executed. If the scheduler yields a value and the effect is not dirty, nothing happens.

If a scheduler is provided, the effect will be automatically disposed if the scheduler ends iteration, and the
iterator will be aborted if the effect is manually disposed.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: node\_modules/@leonardoraele/signals/dist/SignalEffect.d.ts:7

An [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal) that can be used to automatically dispose the effect when the signal is triggered. If you
do not provide an [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal), you must call [SignalEffect.dispose](../../classes/SignalEffect/index.md#dispose-2) manually to clean up the effect when
it is no longer needed, otherwise it will continue to listen for changes in its dependencies indefinitely.

# Function: useSignalStore()

## Call Signature

> **useSignalStore**\<`T`\>(`store`): `Readonly`\<`T`\> & `Disposable`

Defined in: src/hooks.ts:51

Wraps a store so reads during render subscribe the component to every signal it touches.

The returned object behaves like the original store, but includes a disposable token that tears down the render-time
observation scope. In components, the wrapper **must** be assigned to a `using` variable so disposal happens at the
end of the render lifecycle.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T`

Store object whose signal reads should be tracked for the current component render.

### Returns

`Readonly`\<`T`\> & `Disposable`

A disposable readonly wrapper over `store`, or the original nullish value.

### Remarks

This helper is intended for store hooks such as `useCounterStore()`. By returning a wrapper instead of the token
directly, the hook can stay ergonomic while still enforcing correct signal tracking.

The wrapper uses the original store as its prototype, so writes land on the wrapper object rather than the original
store. For that reason the API exposes the wrapped store as `Readonly<T>`; mutable state should live inside signal
objects instead of plain writable properties.

## Call Signature

> **useSignalStore**\<`T`\>(`store`): `Readonly`\<`T`\> & `Disposable` \| `null`

Defined in: src/hooks.ts:52

Wraps a store so reads during render subscribe the component to every signal it touches.

The returned object behaves like the original store, but includes a disposable token that tears down the render-time
observation scope. In components, the wrapper **must** be assigned to a `using` variable so disposal happens at the
end of the render lifecycle.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `null`

Store object whose signal reads should be tracked for the current component render.

### Returns

`Readonly`\<`T`\> & `Disposable` \| `null`

A disposable readonly wrapper over `store`, or the original nullish value.

### Remarks

This helper is intended for store hooks such as `useCounterStore()`. By returning a wrapper instead of the token
directly, the hook can stay ergonomic while still enforcing correct signal tracking.

The wrapper uses the original store as its prototype, so writes land on the wrapper object rather than the original
store. For that reason the API exposes the wrapped store as `Readonly<T>`; mutable state should live inside signal
objects instead of plain writable properties.

## Call Signature

> **useSignalStore**\<`T`\>(`store`): `Readonly`\<`T`\> & `Disposable` \| `undefined`

Defined in: src/hooks.ts:53

Wraps a store so reads during render subscribe the component to every signal it touches.

The returned object behaves like the original store, but includes a disposable token that tears down the render-time
observation scope. In components, the wrapper **must** be assigned to a `using` variable so disposal happens at the
end of the render lifecycle.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `undefined`

Store object whose signal reads should be tracked for the current component render.

### Returns

`Readonly`\<`T`\> & `Disposable` \| `undefined`

A disposable readonly wrapper over `store`, or the original nullish value.

### Remarks

This helper is intended for store hooks such as `useCounterStore()`. By returning a wrapper instead of the token
directly, the hook can stay ergonomic while still enforcing correct signal tracking.

The wrapper uses the original store as its prototype, so writes land on the wrapper object rather than the original
store. For that reason the API exposes the wrapped store as `Readonly<T>`; mutable state should live inside signal
objects instead of plain writable properties.

## Call Signature

> **useSignalStore**\<`T`\>(`store`): `Readonly`\<`T`\> & `Disposable` \| `null` \| `undefined`

Defined in: src/hooks.ts:54

Wraps a store so reads during render subscribe the component to every signal it touches.

The returned object behaves like the original store, but includes a disposable token that tears down the render-time
observation scope. In components, the wrapper **must** be assigned to a `using` variable so disposal happens at the
end of the render lifecycle.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `null` \| `undefined`

Store object whose signal reads should be tracked for the current component render.

### Returns

`Readonly`\<`T`\> & `Disposable` \| `null` \| `undefined`

A disposable readonly wrapper over `store`, or the original nullish value.

### Remarks

This helper is intended for store hooks such as `useCounterStore()`. By returning a wrapper instead of the token
directly, the hook can stay ergonomic while still enforcing correct signal tracking.

The wrapper uses the original store as its prototype, so writes land on the wrapper object rather than the original
store. For that reason the API exposes the wrapped store as `Readonly<T>`; mutable state should live inside signal
objects instead of plain writable properties.

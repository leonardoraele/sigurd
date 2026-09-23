# Function: useMutableSignalStore()

## Call Signature

> **useMutableSignalStore**\<`T`\>(`store`): `T` & `Disposable`

Defined in: src/hooks.ts:90

Mutable counterpart to [useSignalStore](../useSignalStore/index.md).

Use this variant when your store intentionally exposes writable plain properties in addition to signals and you need
writes to target the original store object. The returned proxy still carries a disposable token and therefore also
**must** be assigned to a `using` variable inside the component body.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T`

Store object whose signal reads should be tracked for the current component render.

### Returns

`T` & `Disposable`

A disposable proxy for `store`, or the original nullish value.

### Remarks

Prefer [useSignalStore](../useSignalStore/index.md) unless you specifically need mutation of non-signal properties. The readonly variant is
simpler and avoids the semantic overhead of a proxy.

## Call Signature

> **useMutableSignalStore**\<`T`\>(`store`): `T` & `Disposable` \| `null`

Defined in: src/hooks.ts:91

Mutable counterpart to [useSignalStore](../useSignalStore/index.md).

Use this variant when your store intentionally exposes writable plain properties in addition to signals and you need
writes to target the original store object. The returned proxy still carries a disposable token and therefore also
**must** be assigned to a `using` variable inside the component body.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `null`

Store object whose signal reads should be tracked for the current component render.

### Returns

`T` & `Disposable` \| `null`

A disposable proxy for `store`, or the original nullish value.

### Remarks

Prefer [useSignalStore](../useSignalStore/index.md) unless you specifically need mutation of non-signal properties. The readonly variant is
simpler and avoids the semantic overhead of a proxy.

## Call Signature

> **useMutableSignalStore**\<`T`\>(`store`): `T` & `Disposable` \| `undefined`

Defined in: src/hooks.ts:92

Mutable counterpart to [useSignalStore](../useSignalStore/index.md).

Use this variant when your store intentionally exposes writable plain properties in addition to signals and you need
writes to target the original store object. The returned proxy still carries a disposable token and therefore also
**must** be assigned to a `using` variable inside the component body.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `undefined`

Store object whose signal reads should be tracked for the current component render.

### Returns

`T` & `Disposable` \| `undefined`

A disposable proxy for `store`, or the original nullish value.

### Remarks

Prefer [useSignalStore](../useSignalStore/index.md) unless you specifically need mutation of non-signal properties. The readonly variant is
simpler and avoids the semantic overhead of a proxy.

## Call Signature

> **useMutableSignalStore**\<`T`\>(`store`): `T` & `Disposable` \| `null` \| `undefined`

Defined in: src/hooks.ts:93

Mutable counterpart to [useSignalStore](../useSignalStore/index.md).

Use this variant when your store intentionally exposes writable plain properties in addition to signals and you need
writes to target the original store object. The returned proxy still carries a disposable token and therefore also
**must** be assigned to a `using` variable inside the component body.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### store

`T` \| `null` \| `undefined`

Store object whose signal reads should be tracked for the current component render.

### Returns

`T` & `Disposable` \| `null` \| `undefined`

A disposable proxy for `store`, or the original nullish value.

### Remarks

Prefer [useSignalStore](../useSignalStore/index.md) unless you specifically need mutation of non-signal properties. The readonly variant is
simpler and avoids the semantic overhead of a proxy.

# Comparison to Other State Management Solutions

## Sigurd vs Redux

Sigurd provides a more modern and reactive approach to state management compared to Redux. While Redux relies on a centralized store, actions, and selectors to manage state, Sigurd uses signals, leading to less boilerplate code and more fine-grained reactivity.

- ✅ **Modular State Management.** Sigurd does not require a centralized store. Instead, stores are standard JavaScript classes, making it easier to organize and encapsulate state logic. You can have multiple stores, feature-specific stores, nested stores, etc.
- ✅ **Simplified Workflow.** No need to dispatch actions to the store. You simply call methods on your store instances. No need to access store data through selectors, simply read from the signals directly and the component will automatically track dependencies.
- ✅ **Simplified Typing.** No need to define types externally to the store. Sigurd stores are standard JavaScript classes, so you simply type your store like you would any class.

## Sigurd vs Zustand

Sigurd and Zustand both offer a more modern approach to state management compared to Redux, but they have different philosophies and implementations.

- ✅ **Class-Based Stores.** Like Sigurd, Zustand allows you to create multiple stores, but Sigurd's use of standard JavaScript classes can make organizing and encapsulating state logic easier and more intuitive.
- ✅ **Automatic Dependency Tracking.** Sigurd uses signals to automatically track dependencies and update components when state changes, whereas Zustand relies on hooks and manual subscription management for reactivity.

## Sigurd vs `@preact/signals-react`

Sigurd and `@preact/signals-react` both leverage signals for reactivity in the entire component body, so they are very similar. The only notable difference is that `@preact/signals-react` relies on Babel for transforming components to inject signal tracking automatically. Instead, Sigurd uses JavaScript's disposal mechanism to manage signal subscriptions automatically, requiring no build step for signal tracking.

- ✅ **No Build Step Required.** Sigurd requires no build tooling or bundler plugin.
- ✅ **Reactive Data Structures.** Sigurd offers `ReactiveArray`, `ReactiveSet`, and `ReactiveMap` for managing collections reactively. `@preact/signals-react` requires the signals to be reassigned with new immutable data in order to trigger updates.

## Sigurd vs Signia

Signia and Sigurd are very similar. One of the major differences is that Signia uses high order components (via its `track()` function) to track signal usage within your components, while Sigurd uses JavaScript's disposal mechanism to solve the same problem. Both are equally effective solutions.

What Sigurd offers that Signia lacks are reactive data structures, which allow for more fine-grained reactivity when working with collections.

<!-- TODO Signia also requires to install a Vite plugin. It is possible that Signia only reacts within JSX statements. Also Sigurd works with any bundler. -->

- ✅ **Reactive Data Structures.** Sigurd offers `ReactiveArray`, `ReactiveSet`, and `ReactiveMap`, which react to changes in their contents. `Signia` requires the signals to be reassigned with a new immutable data object every time it changes in order to trigger updates.

## Sigurd vs MobX

MobX uses a very clever approach to observing state changes. It injects getters and setters into your store objects to intercept reads and writes, allowing it to track dependencies and trigger reactions automatically. It then relies on a high order component (via its `observer()` function) to wrap your React components and ensure they re-render when the observed state changes.

Compared to MobX, Sigurd is slightly more transparent with state management, since your stores' properties are explicitly typed as signal objects. This makes it easier to understand and reason about the reactivity in your application, but is also a little more verbose, since you have to read its `value` property to access the underlying state.

<!--
// TODO: Compare to other state management solutions for React:
- Valtio
- Signalium
- Legend-State
-->

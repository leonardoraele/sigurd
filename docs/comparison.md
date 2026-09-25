
<!--

Compare to other state management solutions for React:

- Redux
- Zustand

And signal-based solutions:

- @preact/signals-react
- Signia
- MobX
- Valtio
- Signalium
- Legend-State

-->

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

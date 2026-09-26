---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: SIGURD
  text: React state management with signals.
  tagline: ~
  actions:
    - theme: brand
      text: Getting Started
      link: ./guides
    - theme: alt
      text: API Reference
      link: /api
    - theme: alt
      text: ⭐ Star on GitHub
      link: https://github.com/leonardoraele/sigurd

features:
  - title: What are Signals?
    link: ./guides/what-are-signals
    linkText: Learn More
  - title: Stores as ES6 Classes
    details: Sigurd's stores are just standard JavaScript classes of your design. There's no special factory patterns and custom APIs. You also don't need to extend any class.
    link: ./guides/stores
    linkText: Learn More
  - title: Fully Reactive Components
    details: Sigurd observes signal usage within your entire components, not just JSX expressions. You don't need to use special selector hooks to manually manage dependencies.
    link: ./guides/reactivity
    linkText: Learn More
  - title: Modular Stores
    details: Build separate stores for each domain or feature in your application. Stores can reference and call each other. You can even have nested stores.
    link: ./guides/modular-stores
    linkText: Learn More
---

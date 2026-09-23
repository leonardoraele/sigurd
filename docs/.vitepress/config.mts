import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Sigurd',
  description: 'A lightweight React state management library built around signals.',
  base: '/sigurd/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/getting-started/installation' },
      { text: 'Guides', link: '/guides/creating-a-store' },
      { text: 'Examples', link: '/examples/counter' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Architecture', link: '/architecture' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Quickstart', link: '/getting-started/quickstart' },
            { text: 'Core Concepts', link: '/getting-started/core-concepts' },
          ],
        },
      ],
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Creating a Store', link: '/guides/creating-a-store' },
            { text: 'Global Singletons', link: '/guides/global-singletons' },
            { text: 'React Context', link: '/guides/react-context' },
            { text: 'Nested Stores', link: '/guides/nested-stores' },
            { text: 'Signal Effects', link: '/guides/effects' },
            { text: 'Store Hooks', link: '/guides/store-hooks' },
            { text: 'Lifecycle and Disposal', link: '/guides/lifecycle-and-disposal' },
          ],
        },
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Counter', link: '/examples/counter' },
            { text: 'Context Store', link: '/examples/context-store' },
            { text: 'Nested Store', link: '/examples/nested-store' },
            { text: 'Mutable vs Readonly', link: '/examples/mutable-vs-readonly' },
          ],
        },
      ],
      '/faq/': [
        {
          text: 'FAQ and Caveats',
          items: [
            { text: 'Caveats', link: '/faq/caveats' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Generated Reference', link: '/api/reference/' },
          ],
        },
      ],
      '/': [
        {
          text: 'Documentation Planning',
          items: [
            { text: 'Documentation Architecture', link: '/architecture' },
            { text: 'Content Model and Navigation', link: '/content-model' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leonardoraele/sigurd' },
    ],
  },
});

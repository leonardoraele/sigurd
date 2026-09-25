import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Sigurd',
	description: 'A lightweight state management library for React based on signals.',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/' },
			{ text: 'API Reference', link: '/api-reference' },
		],
		sidebar: [
			{
				text: 'Documentation',
				items: [
					{ text: 'Introduction', link: '/' },
					{ text: 'API Reference', link: '/api-reference' },
				],
			},
		],
	},
});

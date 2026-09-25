import { defineConfig } from 'vitepress';
import PACKAGE from '#package.json' with { type: 'json' };

export const HITHUB_URL = 'https://github.com/leonardoraele/sigurd';
export const DEFAULT_LOCALE = 'enUS';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: PACKAGE.name,
	description: "React state management with signals.",

	rewrites: {
		'/:path*': '/enUS/:path*'
	},

	locales: {
		enUS: {
			label: 'English',
			lang: 'en-US',
			description: 'React state management with signals.',
			themeConfig: {
				nav: [
					{ text: 'Guides', link: '/enUS/guides', activeMatch: '^/enUS/guides/' },
					{ text: 'API Reference', link: '/api', activeMatch: '^/api/' },
					// { text: 'Examples', link: '/enUS/examples', activeMatch: '^/enUS/examples/' },
					{ text: 'GitHub', link: HITHUB_URL },
				],
				sidebar: {
					'/enUS/guides/': [
						{ text: 'Introduction', items: [
							{ text: 'Getting Started', link: '/enUS/guides/getting-started' },
							{ text: 'Comparison', link: '/enUS/guides/comparison' },
						] },
					],
					// '/enUS/examples/': [
					// 	{ text: 'Example 1', link: '/enUS/examples/example-1' },
					// 	{ text: 'Example 2', link: '/enUS/examples/example-2' }
					// ],
				},

				footer: {
					message: "Released under the MIT License.",
					copyright: "Copyright © 2026 Leonardo Raele",
				},
			},
		},

		// ptBR: {
		// 	label: 'Português',
		// 	lang: 'pt-BR',
		// 	description: 'Gerenciamento de estado no React com sinais.',
		// },
	},

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {
		socialLinks: [
			{ icon: 'github', link: HITHUB_URL }
		],
		search: {
			provider: 'local',
		},
	}
});

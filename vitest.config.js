import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
		deps: {
			optimizer: {
				client: {
					enabled: true,
					include: ['@leonardoraele/signals', '@leonardoraele/event-controller'],
				},
				ssr: {
					enabled: true,
					include: ['@leonardoraele/signals', '@leonardoraele/event-controller'],
				},
			},
		},
		server: {
			deps: {
				inline: [/^@leonardoraele\//],
			},
		},
	},
});

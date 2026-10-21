import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { glob } from 'node:fs/promises';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	root: 'src',
	publicDir: path.resolve(import.meta.dirname, 'public'),
	input: await Array.fromAsync(glob('src/**/*.html')),
	build: {
		outDir: path.resolve(import.meta.dirname, 'dist'),
		emptyOutDir: true,
	},
});

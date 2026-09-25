import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';
import hooksSource from './hooks.ts?raw';
import indexSource from './index.ts?raw';

const require = createRequire(import.meta.url);

function getDocumentedSignalsExports(source: string): string[] {
	const matches = source.matchAll(
		/\/\*\*[\s\S]*?\*\/\s*export (?:type )?\{\s*(\w+)\s*\} from '@leonardoraele\/signals';/g,
	);
	return [...matches].map(([, symbol]) => symbol).sort();
}

function getSignalsPackageExports(): string[] {
	const signalsRuntimeEntryPath = require.resolve('@leonardoraele/signals');
	const signalsEntryPath = signalsRuntimeEntryPath.replace(/index\.js$/, 'index.d.ts');
	const signalsEntrySource = readFileSync(signalsEntryPath, 'utf8');
	const signalsEntryDirectory = dirname(signalsEntryPath);
	const exportedSymbols = new Set<string>();

	for (const [, relativePath] of signalsEntrySource.matchAll(/export \* from '(.+?)';/g)) {
		const declarationPath = join(signalsEntryDirectory, relativePath.replace(/\.js$/, '.d.ts'));
		const declarationSource = readFileSync(declarationPath, 'utf8');

		for (const [, exportName] of declarationSource.matchAll(
			/^export (?:declare )?(?:class|function|const|namespace|enum|interface|type)\s+([A-Za-z_]\w*)/gm,
		)) {
			exportedSymbols.add(exportName);
		}
	}

	return [...exportedSymbols].sort();
}

function getHookDocBlock(source: string, exportName: string): string | undefined {
	const matches = source.matchAll(
		/\/\*\*[\s\S]*?\*\/\s*export function (\w+)/g,
	);

	for (const [match, name] of matches) {
		if (name === exportName) {
			return match.slice(0, match.lastIndexOf('export function'));
		}
	}
}

describe('public api source documentation', () => {
	it('documents every re-exported signals symbol in the package entrypoint', () => {
		expect(indexSource).not.toContain("export * from '@leonardoraele/signals';");
		expect(getDocumentedSignalsExports(indexSource)).toEqual(getSignalsPackageExports());
		expect(getDocumentedSignalsExports(indexSource)).toEqual([
			'EffectOptions',
			'EqualityComparer',
			'ObserverCallback',
			'ReactiveArray',
			'ReactiveMap',
			'ReactiveSet',
			'SignalComputed',
			'SignalController',
			'SignalEffect',
			'SignalPrimitive',
			'SignalState',
			'StateOptions',
			'isReactiveProxy',
			'makeReactive',
			'unmakeReactive',
			'unwrapReactiveProxy',
		]);
		expect(indexSource).toContain('`sigurd`');
	});

	it('adds doc blocks for the previously incomplete public hook surface', () => {
		const observerTokenDocBlock = getHookDocBlock(hooksSource, 'useSignalObserverToken');

		expect(hooksSource).toMatch(/\/\*\*[\s\S]*?\*\/\s*export function useMutableSignalStore/);
		expect(hooksSource).toMatch(/\/\*\*[\s\S]*?@returns[\s\S]*?\*\/\s*export function useSignalObserverToken/);
		expect(hooksSource).toMatch(/\/\*\*[\s\S]*?\*\/\s*class DisposableToken/);
		expect(observerTokenDocBlock).toBeDefined();
		expect(observerTokenDocBlock).toContain('@returns');
		expect(observerTokenDocBlock).not.toContain('@param');
	});
});

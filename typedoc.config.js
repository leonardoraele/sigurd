import PACKAGE from '#package.json' with { type: 'json' };

/** @type {Partial<import('typedoc').TypeDocOptions> & import('typedoc-plugin-markdown').PluginOptions} */
const config = {
	plugin: ['typedoc-plugin-markdown'],
	entryPoints: ['./src/index.ts'],
	out: 'docs/api',
	readme: 'none',
	entryFileName: 'index',
	indexFormat: 'table',
	parametersFormat: 'table',
	sanitizeComments: true,
	strikeDeprecatedPageTitles: true,
	useCodeBlocks: true,
	useHTMLAnchors: true,
	disableSources: true,
};

export default config;

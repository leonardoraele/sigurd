import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = (() => {
	const root = document.createElement('div');
	root.id = 'app';
	root.style = 'display: contents;';
	document.body.appendChild(root);
	return root;
})();

createRoot(root).render(<App />);

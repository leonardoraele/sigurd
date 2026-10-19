<script setup>
import {  } from 'react';
import { createRoot } from 'react-dom';
import { ref, onMounted } from 'vue';
import { CounterExample } from './CounterExample.tsx';

const root = ref();
onMounted(() => {
	const app = createRoot(root.value);
	app.render(<CounterExample />);
});
</script>

<div ref="root" />

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			formats: ['es', 'cjs', 'umd'],
			name: 'chainlist'
		},
		emptyOutDir: true
	}
});

import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		reporters: ['verbose'],
		typecheck: {
			checker: 'tsc'
		}
	}
});

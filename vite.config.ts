import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
	plugins: [React()],
	build: {
		assetsInlineLimit: 0,
	},
	server: {
		port: 3333,
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
})

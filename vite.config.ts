import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteImagemin from 'vite-plugin-imagemin';
import sitemap from 'vite-plugin-sitemap';

const routes = [{ priority: 1.0, url: '/' }];

export default defineConfig({
	build: {
		assetsInlineLimit: 512,
		chunkSizeWarningLimit: 512,
		cssMinify: true,
		minify: 'esbuild',
		modulePreload: true,
		rollupOptions: {
			cache: false,
			output: {
				manualChunks: {
					vendor: [
						'react',
						'react-dom',
						'@mui/material',
						'react-router-dom',
						'react-dom-client',
						'@mui/icons-material',
					],
				},
			},
			treeshake: 'recommended',
		},
		sourcemap: false,
		target: 'esnext',
	},
	plugins: [
		react(),
		chunkSplitPlugin({
			strategy: 'single-vendor',
			useEntryName: true,
		}),
		viteImagemin({
			gifsicle: { optimizationLevel: 7 },
			mozjpeg: { quality: 65 },
			optipng: { optimizationLevel: 7 },
			svgo: {
				plugins: [
					{ active: false, name: 'removeViewBox' },
					{ active: true, name: 'removeDimensions' },
					{ active: true, name: 'removeEmptyAttrs' },
					{ active: true, name: 'removeUselessStrokeAndFill' },
				],
			},
			webp: { quality: 65 },
		}),
		sitemap({
			dynamicRoutes: routes.map(route => route.url),
			hostname: 'https://quiz-hub-kero.vercel.app/',
			priority: Object.fromEntries(
				routes.map(route => [route.url, route.priority]),
			),
			readable: true,
			robots: [{ allow: '/', userAgent: '*' }],
		}),
	],
	resolve: {
		alias: {
			src: '/src',
		},
		conditions: ['mui-modern', 'module', 'browser', 'development|production'],
	},
	server: {
		hmr: true,
	},
});

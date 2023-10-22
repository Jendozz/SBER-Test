import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
import progress from 'vite-plugin-progress';
import viteCompression from 'vite-plugin-compression';
import { viteAliases } from './configs/vite/aliases';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, './configs/env', 'ENV_');

    return {
        base: '/',
        appType: 'spa',
        clearScreen: false,
        // Env variables starting with envPrefix will be exposed to client source code via import.meta.env.
        envDir: './configs/env',
        envPrefix: 'ENV_',
        plugins: [
            react(),
            legacy(),
            svgr(),
            progress({ clear: true }),
            viteCompression({
                verbose: true,
                disable: mode === 'development',
            }),
            splitVendorChunkPlugin(),
        ],
        resolve: {
            alias: viteAliases,
            extensions: ['.ts', '.tsx', '.json', '.js'],
        },
        server: {
            host: env.ENV_HOST || '0.0.0.0',
            port: Number(env.ENV_PORT),
            strictPort: false,
            open: true,
        },
        build: {
            outDir: 'dist',
            assetsDir: 'ui',
            sourcemap: false,
            // Enable/disable gzip-compressed size reporting. Compressing large output files can be slow, so disabling this may increase build performance for large projects.
            reportCompressedSize: true,
            chunkSizeWarningLimit: 300,
        },
    };
});

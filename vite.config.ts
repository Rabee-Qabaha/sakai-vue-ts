import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Checker from 'vite-plugin-checker';

export default defineConfig(async () => {
    const { PrimeVueResolver } = await import('@primevue/auto-import-resolver');
    return {
        optimizeDeps: {
            noDiscovery: true,
        },
        plugins: [
            vue(),
            Checker({ typescript: true }),
            Components({
                resolvers: [PrimeVueResolver()],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    };
});

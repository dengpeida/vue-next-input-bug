import {resolve} from "path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'


function pathResolve(dir: string) {
    return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
const config = {
    plugins: [vue(), legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),vueJsx({})],
    resolve: {
        alias: {
            "@": pathResolve('src'),
        },
    },
    optimizeDeps: {
        include: ["@ant-design/icons-vue"],
    },
}

export default ({ command, mode }) => {
    if (command === 'serve') {
        let serve = {

        }
        // serve 独有配置
        return defineConfig(Object.assign(config,serve))
 
    } else {
        let build = {

        }
        return defineConfig(Object.assign(config,build))
    }
}
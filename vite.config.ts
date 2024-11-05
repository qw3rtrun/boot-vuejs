import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/custom': {
        target: "http://localhost:8080",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue()],
  root: "./src/main/ts",
  build: {
    outDir: '../../../build/dist',
    rollupOptions: {
      input: {
        vue_app: resolve(__dirname, 'src/main/ts/index.html'),
        sub_app: resolve(__dirname, 'src/main/ts/somemodule/subindex.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  }
})



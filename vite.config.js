import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
    fs: {
      allow: [path.resolve(__dirname, "./static")],
    },
  },
  plugins: [sveltekit()],
  resolve: {
    alias: [
      {
        find: "$components",
        replacement: path.resolve(__dirname, "src/lib/components"),
      },
    ],
  },
  base: "",
});

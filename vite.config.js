import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    build: {
        outDir: "dist", // Change this to 'dist'
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});

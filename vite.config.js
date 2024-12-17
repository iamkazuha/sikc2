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
        outDir: "public/build", // Good practice to specify output directory
        emptyOutDir: true, // Recommended: clears output directory before building
    },
    resolve: {
        alias: {
            "@": "/resources/js", // Optional: convenient import alias
        },
    },
});

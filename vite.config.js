import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
            buildDirectory: "build", // Ensure this matches your build output
        }),
    ],
    build: {
        outDir: "public/build", // Specify exact output directory
        emptyOutDir: true,
    },
});

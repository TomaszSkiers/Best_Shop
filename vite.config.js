import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
// const exercisePath = ".";
const srcPath = ".";

/**
 * Don't change those lines below
 */
export default defineConfig({
  // root: exercisePath,
  root: srcPath,
  server: {
    port: 3000,
  },
  base: './', // Ensure relative base path
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Directory for assets within the output directory
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Control asset filenames
      },
    },
  },
});

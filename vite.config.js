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
  base: "/Best_Shop/dist/" // <===== tutaj nazwa naszego repozytorium
  
});

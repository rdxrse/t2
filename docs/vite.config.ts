import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.APP_BASE_URL || "./",
  resolve: {
    alias: {
      src: "/src",
      img: "/src/assets/img",
    },
  },
});

import { defineConfig } from "vite";
import viteSSR from "vite-ssr/plugin";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // The API logic is in outside of the project
      strict: false,
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    viteSSR({
      features: {
        // Manually disable features that are
        // detected because this is a mono repo
        reactStyledComponents: false,
        reactApolloRenderer: false,
      },
    }),
  ],
});

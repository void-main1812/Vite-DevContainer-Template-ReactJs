import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
  server: {
    port: 3000,
    host: "127.0.0.1",
  },
});

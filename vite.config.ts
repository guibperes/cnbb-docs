import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import content from "@originjs/vite-plugin-content";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), content()],
  base: "/cnbb-docs/",
});

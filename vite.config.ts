import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = repository && !repository.endsWith(".github.io") ? `/${repository}/` : "/";

export default defineConfig({
  base,
  plugins: [react()],
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: false,
  },
});

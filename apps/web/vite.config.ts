import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
});

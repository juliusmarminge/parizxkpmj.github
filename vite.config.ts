import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackStart({
      srcDirectory: './app',
      server: {
        entry: "./server/routes/[...].ts",
      },
    }),
    nitro({
      serverDir: "./server",
      renderer: {
        handler: "./renderer.ts",
      },
    }),
    viteReact(),
  ],
});

/// <reference types="vite/client" />

import path from "path";
import { defineConfig, loadEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const userConfig: UserConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
  if (env.VITE_ENABLE_HTTPS) {
    userConfig.plugins?.push(mkcert());
    userConfig.server = {
      https: {},
      port: 5173,
      host: "0.0.0.0",
    };
  }
  return userConfig;
});

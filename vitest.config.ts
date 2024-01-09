import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["src/tests/**/*.test.tsx"],
      environment: "jsdom",
      globals: true, 
    },
  })
)

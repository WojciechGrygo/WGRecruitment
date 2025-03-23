import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";
config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 20_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: 0,
  workers: 3,
  reporter: "html",
  use: {
    baseURL: "https://nordvpn.com",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

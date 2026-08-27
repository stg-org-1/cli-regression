import { test, expect } from "@playwright/test";

test("example placeholder", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

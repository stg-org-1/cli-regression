import { test, expect } from "@playwright/test";

test("example placeholder", async ({ page }) => {
  await page.setContent("<h1>Playwright</h1>");
  await expect(page.locator("h1")).toHaveText("Playwright");
});

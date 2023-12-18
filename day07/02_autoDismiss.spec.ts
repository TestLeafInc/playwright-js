import { test, chromium } from "@playwright/test";

test("Handle alert",async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForTimeout(5000);
    await page.locator("text=Show").first().click();
    const cardLocator = page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
    const alertButton = cardLocator.locator("button").filter({hasText:"Show"});
    await alertButton.click();
    await page.waitForTimeout(2000);
    const cardLocator1 = page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
    const alertButton1 = cardLocator1.locator("button").filter({hasText:"Show"});
    await alertButton1.click();
    await page.waitForTimeout(5000);
    await page.locator("text=Show").last().click();
    await page.waitForTimeout(5000);
})
import { test, chromium } from "@playwright/test";

test("testing Shadow Dom in snow app",async ({page}) => {

    await page.goto("https://dev205797.service-now.com/");
    await page.fill("#user_name", "admin");
    await page.fill("#user_password", "Testleaf@123");
    await page.click("#sysverb_login");
    await page.getByRole("button", {name: 'All'}).click();
    await page.getByPlaceholder("Filter").fill("Incidents");
    await page.getByLabel('Incidents', { exact: true }).click();

})
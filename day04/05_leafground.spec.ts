import { chromium, expect, test } from "@playwright/test";


test("Create a new lead",async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    await expect(typeName).toBeEnabled();
    await typeName.fill("Ranjini");
    await expect(page.getByPlaceholder("Disabled")).toBeDisabled();



})
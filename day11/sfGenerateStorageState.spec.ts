import { test, chromium } from "@playwright/test";


test("Login to Salesforce",async ({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf$1234");
    await page.click("#Login");
    // await page.waitForLoadState("load");
    // await page.click(".slds-icon-waffle");
    // await page.getByText("View All").click();
    await page.context().storageState({path:"creds/sf-login-storage.json"})
})
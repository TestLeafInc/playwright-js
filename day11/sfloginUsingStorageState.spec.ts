import { test, chromium } from "@playwright/test";

test.use({storageState:"creds/sf-login-storage.json"})
test("Autologin using storage state",async ({page}) => {

    await page.goto("https://testleaf30-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await page.waitForLoadState("load");
    await page.click(".slds-icon-waffle");
    await page.getByText("View All").click();
    await page.getByPlaceholder("Search apps or items...").fill("Marketing");
    await page.click('mark:has-text("Marketing")');
    await page.click('a[title="Leads"]');
    await page.click('div[title="New"]');
    await page.getByLabel('Salutation, --None--').click();
    await page.getByTitle('Ms.').click();
    await page.getByPlaceholder('First Name').fill("Ranjini");
    await page.getByPlaceholder('Last Name').fill("R");
    await page.fill("[name='Company']", "Testleaf");
    await page.getByRole('button', {name:'Save',exact: true }).click();
    const text = await page.innerText('.forceToastMessage');
    console.log(`Verified Text: ${text}`);
});
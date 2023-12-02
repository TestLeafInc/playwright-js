import { chromium, firefox, test } from "@playwright/test";

test("To launch a browser", async () => {

    //To launch the browser --> creates a new browser instance

    //const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browser = await firefox.launch({ headless: false });


    //Get the new browser context
    const browserContext = await browser.newContext();

    //Get a new page
    const page = await browserContext.newPage();

    //Load the Url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    //await page.locator("#username").fill('Demosalesmanager');
    await page.fill('#username', 'Demosalesmanager');
    // const userName = page.locator('#username');
    // userName.fill("Demosalesmanager");
    // page.locator('#username').type('Demosalesmanager')

    await page.locator(".inputLogin").nth(1).fill('crmsfa');

    //Click Login
    await page.click('.decorativeSubmit');
    await page.waitForTimeout(5000);

})

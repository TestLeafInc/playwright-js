import { chromium, firefox, test } from "@playwright/test";


test("To launch a browser", async () => {


    //To launch the browser --> creates a new browser instance
    //const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browser = await firefox.launch({headless:false});
    //Get the new browser context
    const browserContext = await browser.newContext();


    //Get a new page
    const page = await browserContext.newPage();


    //Load the Url
    await page.goto("http://leaftaps.com/opentaps/control/main");


    await page.waitForTimeout(10000);


})
test.only("To launch a browser using browser contexts", async () => {


    //To launch the browser --> creates a new browser instance
    //const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browser = await chromium.launch({headless:false, channel:"chrome"});
    //Get the new browser context
    const browserContext = await browser.newContext();
    const browserContext1 = await browser.newContext();


    //Get a new page
    const page = await browserContext.newPage();
    const page1 = await browserContext1.newPage()

    //Load the Url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page1.goto("https://leafground.com/alert.xhtml");


    await page.waitForTimeout(10000);


})
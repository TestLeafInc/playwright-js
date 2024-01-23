import {test} from '@playwright/test'

test("To launch a browser", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    page.locator("#username").fill("DemoSalesManager");
    page.locator(".password").fill("crmsfa");
    page.click("//input[@type='submit']");

    const currentUrl = page.url();
    console.log(`The loaded url is ${currentUrl}`);   
    
})

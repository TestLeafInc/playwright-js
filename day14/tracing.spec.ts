import { chromium, expect, firefox, test } from "@playwright/test";


  test("To launch a browser", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    //Start tracing
    await context.tracing.start({screenshots:true, snapshots:true, sources:true});
    const page = await context.newPage();    
    await page.goto("https://login.salesforce.com/?locale=in");
    console.log("Succesfully login the page");
    await page.locator("#username").fill("sindiya@altimetrik.com");
    await page.locator("#password").fill("Varshini@20");
    await page.locator("#Login").click();
    
    await page.waitForLoadState('load');
    console.log(page.url());
    
    console.log(await page.title());
    //click on the left toggle button
    await page.locator(".slds-icon-waffle").click();
    
    await page.click("//button[text()='View All']")
    

    await page.locator("text='Sales'").click();
   const title=await page.getByTitle("Leads");
   title.click();
   await page.click("//div[text()='New']");
   //await page.waitForLoadState('load');
   await page.click("button[name='salutation']");
    //await page.waitForTimeout(10000);
    //await page.waitForSelector("//span[text()='Mr.']");
    await page.click("//span[text()='Mr.']");
    await page.fill("input[name='lastName']","sabari");
    await page.fill("input[name='Company']","rajendran");
    await page.click("//button[text()='Save']");

    //Stop tracing
    await context.tracing.stop({path:'trace.zip'});
    await browser.close();


}



)